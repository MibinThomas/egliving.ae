import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// Import language files
import en from "../public/locales/en/translation.json";
import ar from "../public/locales/ar/translation.json";

const resources = {
  en: { translation: en },
  ar: { translation: ar },
};

i18next
  .use(initReactI18next) // Connect react-i18next
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false, // Set to false for SSR
    },
  });

i18next.on("languageChanged", (lng) => {
  console.log("Language changed to:", lng);
});

export default i18next;
