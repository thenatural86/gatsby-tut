/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsyby Tutorial",
    description: "get it done",
    author: "@janedoe",
    data: ["item 1", "item 2"],
    person: { name: "paul", age: 33 },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `c8zhtz9851pi`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `esKnbSuHQhhs_arRvuUZSHiMuMPdfOz0TASa5wSjTOA`,
      },
    },
  ],
}
