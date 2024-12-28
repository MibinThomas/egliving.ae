import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "@locales/en/translation.json";

const getLanguageFromPath = () => {
  const pathLang = window.location.pathname.split("/")[1];
  const availableLanguages = ["en", "fr", "ar", "es", "ru"];
  return availableLanguages.includes(pathLang) ? pathLang : null;
};

const updateHtmlLang = (lng) => {
  document.documentElement.lang = lng;
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
    },
    lng: getLanguageFromPath() || localStorage.getItem("language") || "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: {
      order: ["path", "localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
    },
    initImmediate: true,
  });

updateHtmlLang(i18n.language);

i18n.on("languageChanged", (lng) => {
  updateHtmlLang(lng);
});

export default i18n;
