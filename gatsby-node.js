const path = require(`path`)
const fs = require("fs-extra")
const { createFilePath } = require(`gatsby-source-filesystem`)

// To get locale folder loaded

exports.onPostBuild = () => {
  console.log("Copying locales for build")
  fs.copySync(
    path.join(__dirname, "/src/locales"),
    path.join(__dirname, "/public/locales")
  )
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.dir && node.dir.includes('locales/')) {
    console.log("Copying locales because of file change")

    fs.copySync(
      path.join(__dirname, "/src/locales"),
      path.join(__dirname, "/public/locales")
    )
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: { "../../theme.config$": path.join(__dirname,  "src/semantic/theme.config")}
    }
  });
};
