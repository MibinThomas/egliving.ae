import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "../../public/locales/en/common.json";
import arCommon from "../../public/locales/ar/common.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        common: enCommon,
      },
    },
    ar: {
      translation: {
        common: arCommon,
      },
    },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
