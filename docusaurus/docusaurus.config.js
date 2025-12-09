// Minimal Docusaurus v2 config for TEF docs
module.exports = {
  title: 'TEF Oral — Study Guide',
  tagline: 'Section A & B materials for TEF Canada Expression Orale',
  url: 'https://siamakhaz.github.io',
  baseUrl: '/French-Framework/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'siamakhaz',
  projectName: 'French-Framework',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'TEF Oral Docs',
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
  },
};
