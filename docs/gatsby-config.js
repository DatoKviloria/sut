module.exports = {
  siteMetadata: {
    title: 'SUTJS',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/article/`,
        name: 'markdown-pages',
      },
    },
    'gatsby-transformer-remark' 
  ],
  pathPrefix: '/sut'
};
