const gatsbyConfig = require('../gatsby-config');
const findPluginObject = require('../plugin-testing');

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

describe('Gatsby Plugin Google Analytics', () => {
  const findAnalytics = findPluginObject('gatsby-plugin-google-analytics');

  it('does not add the analytics plugin if no option is passed', () => {
    const config = gatsbyConfig();
    const plugin = findAnalytics(config);
    expect(plugin).toBeUndefined();
  });

  it('adds the analytics plugin with defaults if the analytics option is a string', () => {
    const trackingId = 'test-key';
    const expectedOptions = {
      trackingId,
      anonymize: true,
    };
    const config = gatsbyConfig({ analytics: trackingId });
    const plugin = findAnalytics(config);

    expect(plugin).toBeDefined();
    expect(plugin.options).toEqual(expectedOptions);
  });

  it('accepts and merges an analytics settings object with a trackingId', () => {
    const settings = {
      trackingId: 'sample-key',
    };
    const settingsExpected = {
      ...settings,
      anonymize: true,
    };
    const config = gatsbyConfig({ analytics: settings });
    const plugin = findAnalytics(config);

    expect(plugin.options).toEqual(settingsExpected);
  });

  it('accepts an analytics settings object with overrides', () => {
    const overrideSettings = {
      trackingId: 'another-key',
      anonymize: false,
    };
    const config = gatsbyConfig({ analytics: overrideSettings });
    const plugin = findAnalytics(config);

    expect(plugin.options).toEqual(overrideSettings);
  });
});
