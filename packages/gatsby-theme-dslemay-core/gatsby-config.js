/* eslint-disable no-useless-escape */

const gaBase = {
  resolve: 'gatsby-plugin-google-analytics',
  options: {
    anonymize: true,
  },
};

module.exports = ({ analytics, sitemap } = {}) => {
  const plugins = [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      option: {
        name: 'data',
        path: `${__dirname}/data`,
        ignore: ['**/.*'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      option: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
  ];

  if (typeof sitemap === 'undefined' || sitemap === true) {
    plugins.push('gatsby-plugin-sitemap');
  }

  if (typeof analytics === 'string') {
    plugins.push({
      ...gaBase,
      options: {
        ...gaBase.options,
        trackingId: analytics,
      },
    });
  }

  if (
    typeof analytics === 'object' &&
    typeof analytics.trackingId === 'string'
  ) {
    plugins.push({
      ...gaBase,
      options: {
        ...gaBase.options,
        ...analytics,
      },
    });
  }

  return {
    plugins,
  };
};
