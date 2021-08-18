require('dotenv').config()

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "NatalieM",
    author: "Natalie McCook",
    description: "A personal Website for Natalie McCook"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "8lun8ovs3qp0",
        accessToken: "w_SwiXasuVmd8V5qNuQBXZeS7xmlPYl8nVdWmog5TjE",
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "./src/posts"
      }
    }, 
    "gatsby-transformer-remark" 
  ],
};
