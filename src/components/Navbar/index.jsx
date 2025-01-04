import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { useRouter } from "next/router";
import ThemeSwitcher from "../Theme/ThemeSwitcher";

const Navbar = ({ navbarRef, logoRef, logoClass }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const handleMobileDropdown = () => {
    document
      .getElementById("navbarSupportedContent")
      .classList.toggle("show-with-trans");
  };

  return (
    <nav className="navbar change navbar-expand-lg" ref={navbarRef}>
      <div className="container">
        {/* Logo */}
        <Link
          href={`/`}
          hrefLang="en"
          className={`logo ${logoClass && logoClass}`}
        >
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
          <ul className="ml-auto navbar-nav">
            <li className="nav-item">
              <Link
                href={`/`}
                hrefLang="en"
                className={`nav-link ${
                  currentRoute === "/" ? "active-link" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/products`}
                hrefLang="en"
                className={`nav-link ${
                  currentRoute === "/products" ? "active-link" : ""
                }`}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/works`}
                hrefLang="en"
                className={`nav-link ${
                  currentRoute === "/works" ? "active-link" : ""
                }`}
              >
                Works
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/our-factory`}
                hrefLang="en"
                className={`nav-link ${
                  currentRoute === "/our-factory" ? "active-link" : ""
                }`}
              >
                Our Factory
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/about`}
                hrefLang="en"
                className={`nav-link ${
                  currentRoute === "/about" ? "active-link" : ""
                }`}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/blog`}
                hrefLang="en"
                className={`nav-link ${
                  currentRoute === "/blog" ? "active-link" : ""
                }`}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/contact`}
                hrefLang="en"
                className={`nav-link ${
                  currentRoute === "/contact" ? "active-link" : ""
                }`}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/frequently-asked-questions`}
                hrefLang="en"
                className={`nav-link ${
                  currentRoute === "/frequently-asked-questions"
                    ? "active-link"
                    : ""
                }`}
              >
                FAQs
              </Link>
            </li>
          </ul>

          <div
            className="social-wrapper"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
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
                hrefLang="en"
                style={{ color: "#4cb753" }}
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                href="https://www.instagram.com/eg_living.ae/"
                hrefLang="en"
                style={{ color: "#4cb753" }}
              >
                <i className="fab fa-instagram"></i>
              </Link>
            </div>

            {/* Divider */}
            <span style={{ opacity: 0.2 }}>|</span>

            {/* Theme Switcher */}
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
