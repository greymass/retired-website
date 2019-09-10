module.exports = {
  siteMetadata: {
    title: `Greymass Site`,
    officialEmail: `info@greymass.com`,
    officialAddress: '#1 Vancouver Road, Vancouver, BC',
    links: {
      youtube: '',
      telegram: '',
      twitter: '',
      reddit: '',
      github: '',
      steem: '',
    },
    teamMembers: [
      {
        name: 'Aaron Cox',
        title: 'Full Stack & Blockchain Developer',
        description: 'Aaron is a veteran web developer with over 20 years experience, specializing in publishing platforms, social/community engines, and data mining. Aaron has released all his efforts open-source, merged his past experiences with new Blockchain protocols, and has previously worked developing a crowd-sourced review platform and as the lead web developer for a number of tech companies, such as NCSOFT.\nAaron is incredibly fascinated by the impact Blockchain technologies will have on the Internet itself. Since devoting himself full-time to exploring this tech he has built a number of apps including wallets like Vessel, a number of block explorers, and prototypes for end users platforms such as chainBB and Reprint. Aaron is currently a top elected delegate as @jesta on the Steem, Decent, Muse, and Karma blockchains.',
        socialMedia: {
          facebookLink: '',
          githubLink: 'https://github.com/aaroncox',
          linkedinLink: '',
          twitterLink: '',
          youtubeLink: '',
        },
      },
      {
        name: 'Scott Sallinen',
        title: 'Research Scientist',
        description: 'Scott is a Computer Engineering Ph.D. Candidate at the University of British Columbia, with research areas of High Performance Computing and Distributed Systems, Graph Processing, Machine Learning, and Blockchain technologies. Scott has published multiple peer-reviewed papers within these domains in top-tier research conferences such as Supercomputing, and has previously worked in the research divisions of top technology companies such as Intel and Facebook. \nScott has a passion for the application of Blockchain technologies in the real world. He has built and led the Steemcleaners and Cheetah projects on the Steem blockchain for several years, in an effort to address and reduce fraud and phishing on the social media platform. Scott also represents a top elected delegate as @anyx on the Steem blockchain.',
        socialMedia: {},
      },
      {
        name: 'Daniel Fugere',
        title: 'Web App Developer',
        description: 'Daniel is an entrepreneur and software engineer who develops applications that aim to improve the lives of others. At age 19, he started his first web company, through which he developed a health service application for residents of Quebec. He has since continued creating different web applications that have the ultimate goal of making individuals more aware of the issues around them, as well as build positive relationships with people in their communities. \nOver the last couple of years, he has worked as a web engineer and has done back-end as well as front-end programming for projects at big companies such as Pixar, Autodesk and Riot Games.A blockchain enthusiast and avid learner of everything crypto, Daniel has been involved with Greymass since its first steps, helping develop and engineer the nitty-gritty workings of the eos-voter app (recently rebranded to Anchor).',
        socialMedia: {},
      },
      {
        name: 'Johan Nordberg',
        title: 'Software Engineer',
        description: 'Johan is a prolific developer with a broad range of experience and a passion for open-source — he has released a multitude of open-source projects, many of which are widely used. He founded his first company at age 23 after releasing one of the first iPhone apps in the AppStore. Besides iOS development, his specialties are security research, systems design and web development. \nJohan is a strong advocate for the Open Web and believes that blockchain technology has the potential to fundamentally change the world for the better. At Greymass he will be focusing on building our upcoming dApps-platform.',
        socialMedia: {},
      },
      {
        name: 'Myles Snider',
        title: 'Business Development Partner',
        description: 'Myles Snider is the newest addition to the team, recently joining Greymass as a partner. Myles has been involved in the EOS ecosystem since long before mainnet launch. He previously lead research at Multicoin Capital, where he published a number of EOS-focused investment reports. He also created The Stablecoin Index, a tool to track and compare various stablecoin projects.Later, he founded a mainnet block producer called Aurora EOS before eventually joining Greymass. \nMyles has written extensively about EOS economics and governance, and he’ll continue to do so in his new role here. He’ll also focus on interfacing with the community and helping bring more awareness to Greymass’s core product offerings. Myles also hosts an EOS-focused podcast called EOS Voter and writes a bi-weekly newsletter about the EOSIO ecosystem.',
        socialMedia: {},
      },
      {
        name: 'Nicholas Hamer',
        title: 'Visual Designer',
        description: 'Nicholas Hamer is a Sr Designer at Blizzard. With a diverse background in Graphic Design and a Bachelor of Fine Arts in Illustration from the Ringling College of Art and Design, he has a strong sense of composition with the ability to be versatile and think creatively. Having worked on music videos, web sites, video games advertising campaigns, feature films, and television shows, he has gained extensive experience successfully working with applied design, UX, compositing, and motion graphics through the use of programs such as Adobe Photoshop, Illustrator, After Effects, InDesign, Maya, Nuke, and Cinema 4d; A combination of skills that assist him in his ‘out of the box’ thinking and helps to provide a fresh creative perspective to any of his project.',
        socialMedia: {},
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false,
        markdownRemark: {
          postPage: 'src/templates/blog-post.js',
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
          `
        }
      }
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-less`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
