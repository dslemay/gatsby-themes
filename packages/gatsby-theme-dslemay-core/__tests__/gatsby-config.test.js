const gatsbyConfig = require('../gatsby-config');
const { findPluginString, findPluginObject } = require('../plugin-testing');
const {
  hasDependencies: hasDependenciesMock,
  hasDevDependencies: hasDevDependenciesMock,
} = require('../utils');

jest.mock('../utils', () => ({
  hasDependencies: jest.fn(),
  hasDevDependencies: jest.fn(),
}));

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

describe('Gatsby Plugin Flow', () => {
  const hasFlow = findPluginString('gatsby-plugin-flow');

  it('adds the plugin if flow-bin is in the package devDependencies', () => {
    hasDevDependenciesMock.mockImplementationOnce(() => true);
    const config = gatsbyConfig();
    expect(hasFlow(config)).toBe(true);
  });

  it('does not add the plugin if flow-bin is not in the package devDependencies or dependencies', () => {
    hasDependenciesMock.mockImplementationOnce(() => false);
    hasDevDependenciesMock.mockImplementationOnce(() => false);
    const config = gatsbyConfig();
    expect(hasFlow(config)).toBe(false);
  });
});

describe('Gatsby Plugin TypeScript', () => {
  const hasTS = findPluginString('gatsby-plugin-typescript');

  it('adds the plugin if typescript is in the package dependencies', () => {
    hasDependenciesMock.mockImplementation(() => true);
    const config = gatsbyConfig();
    expect(hasTS(config)).toBe(true);
  });

  it('adds the plugin if typescript is in the package devDependencies', () => {
    hasDevDependenciesMock.mockImplementation(() => true);
    const config = gatsbyConfig();
    expect(hasTS(config)).toBe(true);
  });

  it('does not add the plugin if typescript is not in the package devDependencies or dependencies', () => {
    hasDependenciesMock.mockImplementation(() => false);
    hasDevDependenciesMock.mockImplementation(() => false);
    const config = gatsbyConfig();
    expect(hasTS(config)).toBe(false);
  });
});
