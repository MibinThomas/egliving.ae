import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
import LocaleSwitcher from "../LocaleSwitcher";

const Navbar = ({ navbarRef, logoRef, logoClass }) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const { locale } = router;
  const { t } = useTranslation();

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
            <li className="nav-item">
              <Link
                href={`/${locale}/`}
                className={`nav-link ${
                  currentRoute === "/" ? "active-link" : ""
                }`}
              >
                {t("home")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/${locale}/products`}
                className={`nav-link ${
                  currentRoute === "/products" ? "active-link" : ""
                }`}
              >
                {t("products")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/${locale}/works`}
                className={`nav-link ${
                  currentRoute === "/works" ? "active-link" : ""
                }`}
              >
                {t("works")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/${locale}/about`}
                className={`nav-link ${
                  currentRoute === "/about" ? "active-link" : ""
                }`}
              >
                {t("about")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/${locale}/blog`}
                className={`nav-link ${
                  currentRoute === "/blog" ? "active-link" : ""
                }`}
              >
                {t("blog")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/${locale}/contact`}
                className={`nav-link ${
                  currentRoute === "/contact" ? "active-link" : ""
                }`}
              >
                {t("contact")}
              </Link>
            </li>
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ opacity: 0.2 }}>|</span>

            {/* Social Media Links */}
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
                rel="noopener noreferrer"
                title="Facebook"
                href="https://www.facebook.com/profile.php?id=61566560664247"
                style={{ color: "#4cb753" }}
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
                href="#"
                style={{ color: "#4cb753" }}
              >
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                href="https://www.instagram.com/eg_living.ae/"
                style={{ color: "#4cb753" }}
              >
                <i className="fab fa-instagram"></i>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                href="#"
                style={{ color: "#4cb753" }}
              >
                <i className="fab fa-youtube"></i>
              </Link>
            </div>

            {/* Divider */}
            <span style={{ opacity: 0.2 }}>|</span>

            {/* Theme Switcher */}
            <ThemeSwitcher />

            {/* Language Switcher */}
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
