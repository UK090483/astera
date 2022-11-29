const locale = {
  de: { title: "Deutsch", isDefault: true, flag: "🇩🇪" },
  en: { title: "Englisch", flag: "🇺🇸" },
};

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    // appDir: true,
  },
  i18n: {
    locales: Object.keys(locale),
    defaultLocale: Object.entries(locale).reduce(
      (acc, [key, lang]) => (lang.isDefault ? key : acc),
      null
    ),
  },

  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_PROJECT_DATASET: process.env.SANITY_PROJECT_DATASET,
  },

  reactStrictMode: true,
  images: {
    domains: ["picsum.photos", "cdn.sanity.io"],
  },

  webpack(config, options) {
    const { dev, isServer } = options;

    // Do not run type checking twice:
    if (dev && isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }
    return config;
  },
};

module.exports = config;
