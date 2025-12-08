// Minimal Docusaurus v2 config for TEF docs
module.exports = {
  title: 'TEF Oral — Study Guide',
  tagline: 'Section A & B materials for TEF Canada Expression Orale',
  url: 'https://example.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'you',
  projectName: 'tef-docs',
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
