module.exports = {
  siteMetadata: {
    author: 'Greymass',
    title: 'Greymass',
    defaultLanguage: 'en',
    description: 'An eosio block producer creating solutions for the age of the distributed ledger. Projects include Anchor, Fuel, ESR and more.',
    officialEmail: 'hello@greymass.com',
    officialAddress: 'Suite 1700 - 1185 West Georgia Street, Vancouver BC V6E 4E6, Canada',
    localesWithBlog: ['en'],
    links: {
      github: 'https://github.com/greymass/',
      twitter: 'https://twitter.com/greymass',
      telegram: 'https://t.me/greymass',
      forums: 'https://forums.eoscommunity.org/c/greymass/6',
      devForums: 'https://forums.eoscommunity.org/c/eosio-development/anchor-link/7',
      steem: 'https://steemit.com/@greymass',
      reddit: 'https://www.reddit.com/user/greymass',
      youtube: 'https://www.youtube.com/channel/UCKUIgioqwxJhZFUTdSPCAGA',
    },
    anchor: {
      androidDownloadUrl: 'https://play.google.com/store/apps/details?id=com.greymass.anchor',
      desktopReleaseDate: '2021/10/21',
      desktopVersion: '1.3.2',
      iosDownloadUrl: 'https://apps.apple.com/us/app/anchor-wallet/id1487410877',
      iosReleaseDate: '2021/05/04',
      iosVersion: '1.2.2',
      linuxDownloadUrl: 'https://github.com/greymass/anchor/releases',
      macDownloadUrl: 'https://github.com/greymass/anchor/releases/download/v1.3.2/mac-anchor-wallet-1.3.2-x64.dmg',
      windowsDownloadUrl: 'https://github.com/greymass/anchor/releases/download/v1.3.2/win-anchor-wallet-1.3.2.exe',
    }
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: `Montserrat`,
              variants: [`600`]
              // subsets: [`latin`],
            },
            {
              family: `Roboto`,
              variants: [`400`, `700`],
              // subsets: [`latin`],
            },
            {
              family: `Poppins`,
              variants: [`400`, `700`]
            },
          ],
        }
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'blog',
        path: `${__dirname}/src/pages/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'website',
        path: `${__dirname}/src/pages/website`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        query: `
        {
          allMarkdownRemark(filter: { sourceInstanceName: { eq: "blog" } }) {
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
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: 'Dark (Visual Studio)', // Read on for list of included themes. Also accepts object and function forms.
              wrapperClassName: '',   // Additional class put on 'pre' tag. Also accepts function to set the class dynamically.
              injectStyles: true,     // Injects (minimal) additional CSS for layout and scrolling
              extensions: [],         // Third-party extensions providing additional themes and languages
              languageAliases: {},    // Map of custom/unknown language codes to standard/known language codes
              replaceColor: x => x,   // Function allowing replacement of a theme color with another. Useful for replacing hex colors with CSS variables.
              getLineClassName: ({    // Function allowing dynamic setting of additional class names on individual lines
                content,              //   - the string content of the line
                index,                //   - the zero-based index of the line within the code fence
                language,             //   - the language specified for the code fence
                meta                  //   - any options set on the code fence alongside the language (more on this later)
              }) => '',
              logLevel: 'info'       // Set to 'info' to debug if something looks wrong
            }
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl/build`,
        languages: [
          `en`,
          // `fr`
        ],
        defaultLanguage: `en`,
        redirect: true,
        redirectComponent: require.resolve(`./src/components/redirect.js`),
      },
    },
    `gatsby-plugin-remove-serviceworker`,
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
