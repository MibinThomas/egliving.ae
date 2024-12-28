import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en/translation.json"; // Your English translations
import ar from "../locales/ar/translation.json"; // Your Arabic translations (if any)

i18next
  .use(initReactI18next) // Pass i18next instance to react-i18next
  .init({
    resources: {
      en: {
        translation: en, // English translations
      },
      ar: {
        translation: ar, // Arabic translations
      },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language if the key is missing
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18next;
