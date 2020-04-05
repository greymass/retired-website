const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

const jsonConcat = require('json-concat');
const path = require(`path`)
const fs = require('fs-extra')
const { createFilePath } = require(`gatsby-source-filesystem`);
const { siteMetadata: { defaultLanguage } } = require('./gatsby-config');

const {ApiClient, EosjsDataProvider, render} = require('decentium')
const {JsonRpc} = require('eosjs')
const fetch = require('node-fetch')
const rpc = new JsonRpc('http://eos.greymass.com', { fetch })
const dataProvider = new EosjsDataProvider(rpc, {whitelist: ['decentiumorg']});
const client = new ApiClient({dataProvider})
const slugify = require('slugify')

const showdown  = require('showdown')
const converter = new showdown.Converter()
const jsdom = require('jsdom');
const dom = new jsdom.JSDOM();

const exec = require('await-exec');

const BP_JSON_REPO = 'https://github.com/greymass/bp.json';

exports.onPreInit = async () => {
  console.log('Combining Localization Files')
  const p = `${__dirname}/src/intl`;
  const dirs = fs.readdirSync(p).filter((f) =>
    fs.statSync(`${p}/${f}`).isDirectory());
  dirs.forEach((dir) => {
    if (dir !== 'build') {
      const sourceDirectory = `${p}/${dir}/`;
      const destinationFile = `${p}/build/${dir}.json`;

      validateLocaleDir(sourceDirectory);

      jsonConcat({
        src: sourceDirectory,
        dest: destinationFile
      }, (e) => {
        if (e) {
          throw(`Invalid locale JSON. Error: ${JSON.stringify(e)}`);
        }
      });
    }
  })

  console.log('Syncing Decentium Blog Posts')
  const response = await client.getPosts('teamgreymass')
  response.posts.forEach((post) => {
    try {
      client.resolvePost(post)
        .then((resolvedPost) => {
          const html = render(resolvedPost.doc)
          const frontmatter = `---
title: "${resolvedPost.title.replace(/"/g, '\\"')}"
date: ${post.timestamp.split("T")[0]}
author: ${(resolvedPost.author === 'teamgreymass') ? 'Greymass Team' : resolvedPost.author}
featured: true
---
`
          const content = frontmatter + converter.makeMd(html, dom.window.document)
          fs.writeFile(`src/pages/blog/${slugify(resolvedPost.title, { strict: true }).toLowerCase()}.en.md`, content)
        })
        .catch((e) => {
          console.log(post)
          console.log("decentium post render error", e)
        })
    } catch (e) {
      console.log("decentium post resolve error", e)
    }
  })

  if (process.env.NODE_ENV === 'production') {
    console.log(`Downloading the latest bp json files from "${BP_JSON_REPO}".`);

    await exec(`git clone ${BP_JSON_REPO} tmp/bp.json`);
    await exec(`cp -r ./tmp/bp.json/* ./static`);
    await exec(`rm -rf tmp/bp.json`);
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '../../theme.config$': path.join(__dirname,  'src/semantic/theme.config')
      }
    },
    plugins: [
      // Silence mini-css-extract-plugin generating lots of warnings for CSS ordering.
      // We use CSS modules that should not care for the order of CSS imports, so we
      // should be safe to ignore these.
      //
      // See: https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
      })
    ]
  });
};

exports.onCreateNode = ({ node, actions, getNode, getNodes, reporter }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const pageData = updateNodeData(node, createNodeField, getNode, getNodes, reporter);

    const defaultLanguageNode = getNodes().find(node => {
      return
        node.internal.type === `MarkdownRemark` &&
        node.fileAbsolutePath.includes(pageData.slug) &&
        node.fields.page.locale === defaultLanguage;
    });

    defaultLanguageNode &&
      updateNodeData(defaultLanguageNode, createNodeField, getNode, getNodes, reporter);
  }
  return node;
}

function updateNodeData(node, createNodeField, getNode, getNodes, reporter) {
  const {
    sluggishTitle,
    locale,
    pageType,
  } = getDataFromNode(node, getNode, getNodes, reporter);

  const pageData = {
    pageId: node.id,
    slug: sluggishTitle,
    path: `${pageType}/${sluggishTitle}/`,
    locale,
  };

  createNodeField({
    node,
    name: 'page',
    value: pageData,
  });

  return pageData;
}

function getDataFromNode(node, getNode) {
  const slug = createFilePath({ node, getNode, basePath: `pages` })
  const partsOfSlug = slug.split('.');

  const locale = partsOfSlug[1].split('/').join('');
  const sluggishTitle = partsOfSlug[0].split('/')[2];

  const pageType =
    node.fileAbsolutePath.split('/src/pages/')[1].split('/')[0];

  return { sluggishTitle, pageType, locale };
}

exports.onCreatePage = ({ page, actions: { createPage, deletePage } }) => {
  const pageLanguage = page.context.intl && page.context.intl.language;

  deletePage(page);
  createPage({
    ...page,
    context: {
      ...page.context,
      language: pageLanguage || page.context.locale || defaultLanguage
    },
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  await createResourcePages(actions, graphql, reporter);
  await createBlogPages(actions, graphql, reporter);
  await createBlogIndexPages(actions, graphql, reporter);
}

async function createResourcePages(actions, graphql, reporter) {
  const { createPage } = actions
  const resourceTemplate = path.resolve('src/templates/resource.js');
  const result = await fetchMarkdownPagesByFolder('resources', graphql, reporter);

  const resourcePages = result.data.results.edges;
  // Create post detail pages
  resourcePages.forEach(({ node }) => {
    createPage({
      path: node.fields.page.slug,
      context: { slug: node.fields.page.slug, locale: node.fields.page.locale || defaultLanguage },
      component: resourceTemplate,
    })
  })
}

async function createBlogPages(actions, graphql, reporter) {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('src/templates/blog-post.js');
  const result = await fetchMarkdownPagesByFolder('blog', graphql, reporter);
  const blogPages = result.data.results.edges;
  // Create post detail pages
  blogPages.forEach(({ node }) => {
    createPage({
      path: node.fields.page.path,
      context: { slug: node.fields.page.slug, locale: node.fields.page.locale || defaultLanguage },
      component: blogPostTemplate,
    })
  })
}

async function createBlogIndexPages(actions, graphql, reporter) {
  const { createPage } = actions;

  const result = await fetchMarkdownPagesByFolder('blog', graphql, reporter);
  const blogPosts = result.data.results.edges;

  const locales = [];

  blogPosts.forEach(blogPost => {
    const blogPostLocale = blogPost.node.fields.page.locale;

    if (!locales.includes(blogPostLocale)) {
      locales.push(blogPostLocale);
    }
  });

  const blogPostsComponent = path.resolve('src/templates/blog.js');

  locales.forEach(locale => {
    const blogPostForLocale = blogPosts.filter(blogPost => {
      return blogPost.node.fields.page.locale === locale;
    });

    const numberOfPagesForLocale = Math.ceil(blogPostForLocale.length / 10);

    for (var pageNumber = 1; pageNumber <= numberOfPagesForLocale; pageNumber++) {
      createPage({
        path: `/blog/${pageNumber}`,
        context: {
          pageNumber,
          resultsToSkip: (pageNumber - 1) * 10,
          locale,
          totalNumberOfPages: numberOfPagesForLocale,
        },
        component: blogPostsComponent,
      })
    }
  });
}

async function fetchMarkdownPagesByFolder(folder, graphql, reporter) {
  const result = await graphql(`
    {
      results: allMarkdownRemark(filter: {
        fileAbsolutePath: {regex: "/(${folder})/.*.md$/"}
      })
      {
        edges {
          node {
            fields {
              page {
                slug
                path
                locale
              }
            }
          }
        }
      }
    }
  `)
  // handle errors
  if (result.errors) {
    return reporter.panicOnBuild(
      `Error while running GraphQL query to build resource pages. ${JSON.stringify(result.errors)}`
    );
  }

  return result;
}

function validateLocaleDir(dir) {
  fs.readdir(dir, (err, fileNames) => {
    fileNames.forEach(fileName => {
      const filePath = `${dir}${fileName}`;

      try {
        require(filePath);
      } catch (e) {
        if (e) {
          throw(`Invalid locale JSON at "${filePath}". Error: ${e.message}`);
        }
      }
    });
  });
}
