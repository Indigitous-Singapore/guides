export default {
  "title": "Indigitous Singapore - Guides",
  "tagline": "Providing the guides and tools to help digitalise your Kingdom work",
  "url": "https://guides.indigitous.sg",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon.ico",
  "organizationName": "indigitous-singapore",
  "projectName": "guides",
  "themeConfig": {
    "navbar": {
      "title": "Guides by Indigitous",
      "logo": {
        "alt": "Guides by Indigitous",
        "src": "img/logo.png"
      },
      "items": [
        {
          "to": "guides/",
          "activeBasePath": "docs",
          "label": "Guides",
          "position": "left"
        },
        {
          "href": "https://indigitous.sg",
          "label": "Indigitous Singapore",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [],
      "copyright": "Copyright © 2020 - Indigitous Singapore. Built with Docusaurus."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "metadatas": []
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "routeBasePath": "/guides",
          "sidebarPath": "/Users/aaronstevensonlee/GitHub/ndgt/guides/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "theme": {
          "customCss": "/Users/aaronstevensonlee/GitHub/ndgt/guides/src/css/custom.css"
        }
      }
    ]
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|"
};