# Gatsby Theme dslemay Core

This theme installs some core Gatsby plugins used by many sites. This resolves the problem of installing and updating many packages in each Gatsby project. This package installs and adds the following packages to your `gatsby-config.js`:

- [gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet)
- [gatsby-plugin-sharp](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/)
- [gatsby-transformer-sharp](https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/)
- [gatsby-plugin-sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/)
- [gatsby-plugin-google-analytics](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/)

## Installation and Usage

To install this theme run the command below.

- Yarn `yarn add -D gatsby-theme-dslemay-core`
- NPM `npm i -D gatsby-theme-dslemay-core`

Once installed, your `gatsby-config.js` will need to be updated to use the theme. This can be done by adding the following code.

```javascript
// gatsby-config.js
module.exports = {
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-dslemay-core',
      options: {
        analytics: 'tracking-id' // Object or string
        sitemap: true // Boolean
      }
  ],
  ...
}
```

Gatsby will then merge the plugins defined in the package's gatsby-config onto yours. As a result, you do not need to install or manually add any of the packages listed above to your project.

## Available options

Options let you configure how the theme works with your project. Information about each option and any defaults is listed below.

| Option key  | Type(s)          | Default     | Description                                                                           |
| ----------- | ---------------- | ----------- | ------------------------------------------------------------------------------------- |
| `analytics` | String or Object | `undefined` | Adds Google Analytics to your configuration. Additional config details listed below   |
| `sitemap`   | `boolean`        | `true`      | Generates a sitemap. **Note**: Requires a `siteUrl` in your `siteMetadata` if enabled |

### Configuring Google Analytics

Analytics is off by default. The configuration accepts a string or an object to enable Google Analytics tracking. The configuration object accepts all of the keys listed in the [Gatsby plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/)

- String: Must be your Google Analytics tracking id. Sets the `anonymize` option to true.
- Object: Pass in the same options listed in the plugin docs. Anonymize is defaulted to true, but can be overriden by your configuration object.
