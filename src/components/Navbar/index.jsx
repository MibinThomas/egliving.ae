import React, { useState, useEffect } from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import classNames from "classnames";

const Navbar = ({ navbarRef, logoRef, logoClass }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const router = useRouter();
  const currentRoute = router.pathname;
  const { t } = useTranslation();
  const locale = i18next.language || "en"; // Fallback to 'en' if locale is undefined

  // Apply saved theme on load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const isDark = savedTheme === "dark";
    setDarkTheme(isDark);
    document.body.classList.toggle("dark-theme", isDark);
  }, []);

  // Handle theme toggle
  const handleThemeSwitch = () => {
    const newTheme = darkTheme ? "light" : "dark";
    setDarkTheme(!darkTheme);
    document.body.classList.toggle("dark-theme", !darkTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Handle language switch
  const handleLanguageSwitch = () => {
    const newLanguage = locale === "en" ? "ar" : "en"; // Toggle language
    i18next.changeLanguage(newLanguage); // Change language in i18next

    // Update the URL to reflect the new language
    const newPath = router.pathname.replace(`/${locale}`, `/${newLanguage}`);
    router.push(newPath, undefined, { shallow: true }); // Change the route without full page reload

    // Store the selected language in localStorage
    localStorage.setItem("language", newLanguage);
  };

  // Handle mobile dropdown toggle
  const handleMobileDropdown = () => {
    document
      .getElementById("navbarSupportedContent")
      .classList.toggle("show-with-trans");
  };

  return (
    <nav className="navbar change navbar-expand-lg" ref={navbarRef}>
      <div className="container">
        {/* Logo */}
        <Link href={`/${locale}`} className={`logo ${logoClass && logoClass}`}>
          <img src={appData.lightLogo} alt="EG Logo" ref={logoRef} />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {[
              { path: "/", label: t("Home") },
              { path: "/products", label: t("Products") },
              { path: "/works", label: t("Works") },
              { path: "/about", label: t("About") },
              { path: "/blogs", label: t("Blog") },
              { path: "/contact", label: t("Contact") },
            ].map((item) => (
              <li className="nav-item" key={item.path}>
                <Link
                  href={`/${locale}${item.path}`} // Make sure the locale is part of the link
                  className={classNames("nav-link", {
                    "active-link": currentRoute === item.path,
                  })}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ opacity: 0.2 }}>|</span>
            {/* Social Links and Utilities */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "2rem",
              }}
            >
              <Link
                target="_blank"
                rel=""
                title=""
                style={{
                  minWidth: "20px",
                  display: "flex",
                  textAlign: "center",
                  color: "#4cb753",
                }}
                href="https://www.facebook.com/profile.php?id=61566560664247"
              >
                <i class="fab fa-facebook-f"></i>
              </Link>
              <Link
                target="_blank"
                rel=""
                title=""
                style={{
                  minWidth: "20px",
                  display: "flex",
                  textAlign: "center",
                  color: "#4cb753",
                }}
                href="/#"
              >
                <i class="fab fa-twitter"></i>
              </Link>
              <Link
                target="_blank"
                rel=""
                title=""
                style={{
                  minWidth: "20px",
                  display: "flex",
                  textAlign: "center",
                  color: "#4cb753",
                }}
                href="https://www.instagram.com/eg_living.ae/"
              >
                <i class="fab fa-instagram"></i>
              </Link>
              <Link
                target="_blank"
                rel=""
                title=""
                style={{
                  minWidth: "20px",
                  display: "flex",
                  textAlign: "center",
                  color: "#4cb753",
                }}
                href="/#"
              >
                <i class="fab fa-youtube"></i>
              </Link>
            </div>

            {/* Divider */}
            <span style={{ opacity: 0.2 }}>|</span>

            {/* Theme Switcher */}
            <button
              onClick={handleThemeSwitch}
              className="theme-switcher"
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
              <i className={`fas fa-${darkTheme ? "sun" : "moon"}`}></i>
            </button>

            {/* Language Switcher */}
            <button
              // onClick={handleLanguageSwitch}
              className="language-switcher"
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
              {locale === "en" ? "EN" : "EN"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
