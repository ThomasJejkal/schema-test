import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Test Schema v1.0.0',
  tagline: 'Powered by Docusaurus',
  favicon: 'img/favicon.ico',
  themes: ["docusaurus-json-schema-plugin"],

  // Set the production url of your site here
  url: 'https://ThomasJejkal.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/schema-test',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'thomasjejkal', // Usually your GitHub org/user name.
  projectName: 'schema-test', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  plugins: [
   [
    'docusaurus-json-schema-plugin',
    {
      id: 'schema',
      path: '../',            // Folder where your JSON Schemas are stored
      routeBasePath: 'schemas',     // URL path where they will be hosted
    },
   ]
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Test Schema v1.0.0',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs and Code',
          items: [
            {
              label: 'Test Schema',
              to: '/',
            },
            {
              label: 'Test Schema@GitHub',
              to: 'https://github.com/thomasjejkal/test-schema',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Docusaurus@GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
