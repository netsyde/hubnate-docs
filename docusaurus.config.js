/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Hubnate Docs',
  tagline: 'Random Donate System',
  url: 'https://docs.hubnate.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'netsyde', // Usually your GitHub org/user name.
  projectName: 'hubnate-docs', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  themeConfig: {
    prism: {
      additionalLanguages: ["solidity"],
    },
    navbar: {
      title: 'Hubnate Docs',
      logo: {
        alt: 'Netsyde logo',
        src: 'img/nsd.png',
      },
      items: [
        {
          href: 'https://github.com/netsyde/hubnate-docs',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        debug: true,
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: "docs",
          routeBasePath: "/",
          editUrl:
            'https://github.com/netsyde/hubnate-docs/edit/main/',
        },
        includeCurrentVersion: true,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
