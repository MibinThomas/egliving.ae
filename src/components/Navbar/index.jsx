import React, { useEffect, useRef } from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { useRouter } from "next/router";
import ThemeSwitcher from "../Theme/ThemeSwitcher";

const Navbar = ({ navbarRef, logoRef, logoClass }) => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const dropdownRef = useRef(null);

  const handleMobileDropdown = () => {
    document
      .getElementById("navbarSupportedContent")
      .classList.toggle("show-with-trans");
  };

  const closeMobileDropdown = () => {
    const dropdown = document.getElementById("navbarSupportedContent");
    if (dropdown && dropdown.classList.contains("show-with-trans")) {
      dropdown.classList.remove("show-with-trans");
    }
  };

  const handleClickOutside = (event) => {
    const dropdown = document.getElementById("navbarSupportedContent");
    if (
      dropdown &&
      !dropdown.contains(event.target) &&
      !dropdownRef.current.contains(event.target)
    ) {
      closeMobileDropdown();
    }
  };

  useEffect(() => {
    // Attach event listener to detect clicks outside the dropdown
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar change navbar-expand-lg" ref={navbarRef}>
      <div className="container">
        {/* Logo */}
        <Link
          href={`/`}
          hrefLang="en"
          className={`logo ${logoClass && logoClass}`}
          onClick={closeMobileDropdown} // Close on logo click
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
          ref={dropdownRef}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="ml-auto navbar-nav">
            {[
              { path: "/", label: "Home" },
              { path: "/products", label: "Products" },
              { path: "/works", label: "Works" },
              { path: "/our-factory", label: "Our Factory" },
              { path: "/about", label: "About Us" },
              { path: "/blogs", label: "Blogs" },
              { path: "/contact", label: "Contact Us" },
              { path: "/frequently-asked-questions", label: "FAQs" },
            ].map((link) => (
              <li className="nav-item" key={link.path}>
                <Link
                  href={link.path}
                  hrefLang="en"
                  className={`nav-link ${
                    currentRoute === link.path ? "active-link" : ""
                  }`}
                  onClick={closeMobileDropdown}
                >
                  {link.label}
                </Link>
              </li>
            ))}
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
                onClick={closeMobileDropdown} // Close on social link click
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
                onClick={closeMobileDropdown} // Close on social link click
              >
                <i className="fab fa-instagram"></i>
              </Link>
            </div>

            <span style={{ opacity: 0.2 }}>|</span>

            {/* Theme Switcher */}
            <div onClick={closeMobileDropdown}>
              {" "}
              {/* Close on theme switch */}
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
