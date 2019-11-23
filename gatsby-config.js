module.exports = {
  siteMetadata: {
    title: `Project Thailand`,
    description: `Philip and Lori Bassham have been working in Bangkok, Thailand since early 2013 to preach the Gospel.`,
    author: `@pbassham`,
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-graphql-universal",
      options: {
        typeName: "WPGRAPHQL",
        // This is field under which it's accessible
        fieldName: "wpgraphql",
        // Url to query from
        url: "https://projectthailand.net/graphql",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
