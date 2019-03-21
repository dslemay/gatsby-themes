# Gatsby Theme dslemay Core

This theme installs some core Gatsby plugins used by many sites. This resolves the problem of installing and updating many packages in each Gatsby project. This package installs and adds the following packages to your `gatsby-config.js`:

- gatsby-plugin-react-helmet
- gatsby-plugin-sharp
- gatsby-transformer-sharp
- gatsby-plugin-sitemap

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
        sitemap: true
      }
  ],
  ...
}
```

Gatsby will then merge the plugins defined in the package's gatsby-config onto yours. As a result, you do not need to install or manually add any of the packages listed above to your project.

## Available options

Options let you configure how the theme works with your project. Information about each option and any defaults is listed below.

- `sitemap`: boolean. Determines whether to add the `gatsby-plugin-sitemap` to your plugins. Defaults to true. Please note that this plugin requires a `siteUrl` in your `siteMetadata` if enabled.
