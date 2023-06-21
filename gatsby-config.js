require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  trailingSlash: `always`,
  siteMetadata: {
    title: `Living as Sacred`,
    siteUrl: `https://www.livingasacred.com`,
    description: `Living as Sacred is a movement to remember what it means to live in connection with our mother, ourselves, honouring all the relations with all the beings. 
    Journey with us online April – July 2022.`,
    author: `@jher123`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.livingasacred.com",
        sitemap: "https://www.livingasacred.com/sitemap/sitemap-0.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `living-as-sacred`,
        short_name: `las`,
        start_url: `/`,
        background_color: `#FBF8F29`,
        theme_color: `#FBF8F2`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `ac4ddfce34c01733f275a63c1a5178`,
        preview: false,
        disableLiveReload: false,
        localeFallbacks: {
          pt: ["en"],
        },
      },
    },
    `gatsby-plugin-netlify`,
  ],
}
