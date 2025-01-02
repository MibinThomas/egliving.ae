import { useRouter } from "next/router";
import { useTranslation } from "react-i18next"; // Import to access i18n functionality

const LocaleSwitcher = () => {
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;
  const { i18n } = useTranslation(); // Access i18n instance

  const switchLocale = (newLocale) => {
    i18n.changeLanguage(newLocale); // Change language with i18n
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <select
      value={locale}
      onChange={(e) => switchLocale(e.target.value)}
      style={{
        padding: "5px 10px",
        border: "none",
        backgroundColor: "transparent",
        borderRadius: "5px",
        fontSize: "16px",
      }}
    >
      <option value="en">EN</option>
      <option value="ar">AR</option>
    </select>
  );
};

export default LocaleSwitcher;
