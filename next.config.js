// next.config.js

const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
    localeDetection: false,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};
