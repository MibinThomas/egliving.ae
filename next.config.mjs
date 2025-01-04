// next.config.mjs

import nextI18NextConfig from "./next-i18next.config.js";

export default {
  ...nextI18NextConfig,
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
    localeDetection: true,
  },
};
