// src/components/LocaleSwitcher.js

import { useRouter } from "next/router";
import React from "react";

const LocaleSwitcher = () => {
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;

  const switchLocale = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <button
      onClick={switchLocale}
      className={`p-2 rounded ${
        locale === "en"
          ? "bg-gray-300 dark:bg-gray-700"
          : "bg-gray-100 dark:bg-gray-600"
      }`}
      style={{
        padding: "5px 8px",
        background: "transparent",
        border: "none",
        display: "flex",
        borderRadius: "2px",
        width: "max-content",
        height: "auto",
        outline: "none",
        boxShadow: "none",
      }}
    >
      {locale === "en" ? "EN" : "AR"}
    </button>
  );
};

export default LocaleSwitcher;
