// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '探索独立开发',
  tagline: '用程序员自己的方式',
  favicon: '/img/logo.png',

  // Set the production url of your site here
  url: 'https://coding-freedom.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'coding-freedom', // Usually your GitHub org/user name.
  projectName: 'coding-freedom', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '探索独立开发',
        logo: {
          alt: '探索独立开发',
          src: '/img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'start',
            position: 'left',
            label: '开始',
          },
          {
            type: 'docSidebar',
            sidebarId: 'fe',
            position: 'left',
            label: 'SvelteKit',
          },
          {
            type: 'docSidebar',
            sidebarId: 'android',
            position: 'left',
            label: 'Jetpack Compose',
          },
          {
            type: 'docSidebar',
            sidebarId: 'apple',
            position: 'left',
            label: 'SwiftUI',
          },
          {
            type: 'docSidebar',
            sidebarId: 'qt',
            position: 'left',
            label: 'Qt',
          },
          {
            type: 'docSidebar',
            sidebarId: 'spring',
            position: 'left',
            label: 'Spring',
          },
          {
            type: 'docSidebar',
            sidebarId: 'databases',
            position: 'left',
            label: '数据库',
          },
          {
            type: 'docSidebar',
            sidebarId: 'base',
            position: 'left',
            label: '编程基础',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/coding-freedom',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://space.bilibili.com/388036379',
            label: 'BiliBili',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} 程序员的圆`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: '6S7UDU3OUL',
        apiKey: '3e59ad2a0c33cddf95cbf3dfc9a3d79d',
        indexName: 'coding_freedom',
        contextualSearch: true,
      },
    }),
};

module.exports = config;
