module.exports = ({ sitemap } = {}) => {
  const plugins = [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ];

  if (typeof sitemap === 'undefined' || sitemap === true) {
    plugins.push('gatsby-plugin-sitemap');
  }

  return {
    plugins,
  };
};
