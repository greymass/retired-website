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


exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const resourceTemplate = path.resolve("src/templates/resource.js")
  const result = await graphql(`
    {
      resources: allMarkdownRemark(filter: {
        fileAbsolutePath: {regex: "/(resources)/.*.md$/"}
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

  console.log({result: result.data.resources.edges})
  // handle errors
  if (result.errors) {
    return reporter.panicOnBuild(
      `Error while running GraphQL query to build resource pages. ${JSON.stringify(result.errors)}`
    );
  }
  const resourcePage = result.data.resources.edges
  // Create post detail pages
  resourcePage.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: resourceTemplate,
    })
  })
}
