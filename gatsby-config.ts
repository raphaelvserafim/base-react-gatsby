import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `base-react-gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,

  plugins: ["gatsby-plugin-theme-ui", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }

  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {

      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/",
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }, {
      resolve: 'gatsby-plugin-create-client-paths',
      options: {
        prefixes: ['/search/*']
      },


    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [""],
        gtagConfig: {
          optimize_id: [''],
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
    }
  ],
  flags: {
    DEV_SSR: true,
  },
};

export default config;
