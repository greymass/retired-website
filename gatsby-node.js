const jsonConcat = require('json-concat');
const path = require(`path`)
const fs = require('fs-extra')
const { createFilePath } = require(`gatsby-source-filesystem`)

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

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    const partsOfSlug = slug.split('.');

    if (partsOfSlug.length > 2) {
      return reporter.panicOnBuild(
        `Following blog post title should not contain any "."s:\n ${node.fields.slug}`
      );
    }

    const locale = partsOfSlug[1];
    const cleanedUpSlug = `/${locale}blog${partsOfSlug[0]}`;

    createNodeField({
      node,
      name: `slug`,
      value: cleanedUpSlug,
    });

    if (locale) {
      createNodeField({
        node,
        name: `locale`,
        value: locale,
      });
    }
  }
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
      path: node.fields.slug,
      context: { slug: node.fields.slug },
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
