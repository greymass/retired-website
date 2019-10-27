module.exports = {
  siteMetadata: {
    author: 'Greymass',
    title: 'Greymass',
    defaultLanguage: 'en',
    description: 'EOSIO Block Producer',
    officialEmail: 'hello@greymass.com',
    officialAddress: '#1 Vancouver Road, Vancouver, BC',
    links: {
      youtube: '',
      telegram: '',
      twitter: '',
      reddit: '',
      github: '',
      steem: '',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: `Montserrat`,
            // subsets: [`latin`],
          },
          {
            family: `Roboto`,
            // subsets: [`latin`],
          },
          {
            family: `Poppins`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        query: `
        {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug,
                  langKey
                }
              }
            }
          }
        }
        `,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl/build`,
        languages: [`en`, `fr`],
        defaultLanguage: `en`,
        // redirect: true,
        // redirectComponent: require.resolve(`./src/components/redirect.js`),
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
  ],
}
