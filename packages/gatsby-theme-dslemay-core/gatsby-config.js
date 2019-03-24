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
