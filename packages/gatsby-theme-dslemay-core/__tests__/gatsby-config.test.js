const gatsbyConfig = require('../gatsby-config');

describe('Gatsby Plugin Sitemap', () => {
  it('the sitemap option defaults to true and provides the sitemap plugin', () => {
    const config = gatsbyConfig();
    expect(config.plugins.includes('gatsby-plugin-sitemap')).toBeTruthy();
  });

  it('provides the sitemap plugin when the sitemap option is true', () => {
    const config = gatsbyConfig({ sitemap: true });
    expect(config.plugins.includes('gatsby-plugin-sitemap')).toBeTruthy();
  });

  it('does not provide the sitemap plugin when the sitemap option is false', () => {
    const config = gatsbyConfig({ sitemap: false });
    expect(config.plugins.includes('gatsby-plugin-sitemap')).toBeFalsy();
  });
});
