// src/components/LanguageSwitcher.js
import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, locales, pathname, query, asPath } = router;

  const switchLanguage = (e) => {
    const lang = e.target.value;
    router.push({ pathname, query }, asPath, { locale: lang });
  };

  return (
    <select
      onChange={switchLanguage}
      className="border-none outline-none language-switcher"
    >
      {locales.map((lang) => (
        <option key={lang} value={lang} selected={locale === lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
