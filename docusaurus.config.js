module.exports = {
  title: 'Indigitous Singapore - Guides',
  tagline: 'Providing the guides and tools to help digitalise your Kingdom work',
  url: 'https://guides.indigitous.sg',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'indigitous-singapore', // Usually your GitHub org/user name.
  projectName: 'guides', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Guides by Indigitous',
      logo: {
        alt: 'Guides by Indigitous',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'guides/',
          activeBasePath: 'docs',
          label: 'Guides',
          position: 'left',
        },
        {
          href: 'https://indigitous.sg',
          label: 'Indigitous Singapore',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        /*
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
        */
      ],
      copyright: `Copyright © ${new Date().getFullYear()} - Indigitous Singapore. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/guides',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
