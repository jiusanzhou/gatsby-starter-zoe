module.exports = {
  siteMetadata: {
    title: `1小时指南`,
    description: `每天你应该花3分钟了解自己，1小时了解世界，可能你需要《1小时指南》。`,
    author: `周筱鲁 <hi@zoe.im>`,
    lang: 'zh-CN'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Poppins', 'Recoleta', 'Fredoka One', 'Cabin', 'Open Sans'],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-linaria`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-less`,
  ],
}
