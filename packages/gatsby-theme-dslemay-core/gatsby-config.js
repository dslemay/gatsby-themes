const { hasDevDependencies } = require('./utils');

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
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['gatsby-theme-dslemay-core'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: 'src/data',
        ignore: ['**/.*'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'src/images',
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

  if (hasDevDependencies('flow-bin')) {
    plugins.push('gatsby-plugin-flow');
  }

  return {
    plugins,
  };
};
