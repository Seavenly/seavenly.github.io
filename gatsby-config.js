module.exports = {
  siteMetadata: {
    title: "Nathan Schott's Portfolio",
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
  ],
};
