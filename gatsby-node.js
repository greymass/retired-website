const jsonConcat = require('json-concat');
const path = require(`path`)
const fs = require('fs-extra')
const { createFilePath } = require(`gatsby-source-filesystem`);
const { siteMetadata: { defaultLanguage } } = require('./gatsby-config');

exports.onPreInit = () => {
  console.log('Combining Localization Files')
  const p = `${__dirname}/src/intl`;
  const dirs = fs.readdirSync(p).filter((f) =>
    fs.statSync(`${p}/${f}`).isDirectory());
  dirs.forEach((dir) => {
    jsonConcat({
      src: `${p}/${dir}/`,
      dest: `${p}/build/${dir}.json`
    }, (e) => console.log(e));
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '../../theme.config$': path.join(__dirname,  'src/semantic/theme.config')
      }
    }
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
    path: `/${pageType}/${sluggishTitle}`,
    locale,
    versions: []
  };
  // if is default language node
  if (locale === defaultLanguage) {
    updatePageDataWithVersions(pageData, getNode, getNodes, reporter);
  }

  createNodeField({
    node,
    name: 'page',
    value: pageData,
  });

  return pageData;
}

function updatePageDataWithVersions(pageData, getNode, getNodes, reporter) {
  getNodes().forEach(versionNode => {
    if (versionNode.internal.type !== `MarkdownRemark`) {
      return;
    }

    const {
      sluggishTitle: versionSluggishTitle,
      locale: versionLocale,
    } = getDataFromNode(versionNode, getNode, reporter);

    if (pageData.slug === versionSluggishTitle) {
      pageData.versions.push({
        lang: versionLocale,
        summary: versionNode.excerpt,
        title: versionNode.frontmatter.title,
        date: versionNode.frontmatter.date,
        markdown: versionNode.rawMarkdownBody,
      })
    }
  })
}

function getDataFromNode(node, getNode) {
  const slug = createFilePath({ node, getNode, basePath: `pages` })
  const partsOfSlug = slug.split('.');

  const locale = partsOfSlug[1].split('/').join('');
  const sluggishTitle = partsOfSlug[0].split('/').join('');

  const pageType =
    node.fileAbsolutePath.split('/src/pages/')[1].split('/')[0];

  return { sluggishTitle, pageType, locale };
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  await createResourcePages(actions, graphql, reporter);
  await createBlogPages(actions, graphql, reporter);
}

async function createResourcePages(actions, graphql, reporter) {
  const { createPage } = actions
  const resourceTemplate = path.resolve('src/templates/resource.js');
  const result = await fetchMarkdownPagesByFolder('resources', graphql, reporter);

  const resourcePages = result.data.results.edges;
  // Create post detail pages
  resourcePages.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      context: { slug: node.fields.slug },
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
      path: node.fields.page.slug,
      context: { slug: node.fields.page.slug },
      component: blogPostTemplate,
    })
  })
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
              slug
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
