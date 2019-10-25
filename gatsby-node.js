const path = require(`path`)
const fs = require("fs-extra")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: { "../../theme.config$": path.join(__dirname,  "src/semantic/theme.config")}
    }
  });
};
