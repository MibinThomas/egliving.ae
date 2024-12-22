import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { useRouter } from "next/router";
const Navbar = ({ navbarRef, logoRef, logoClass }) => {
  const handleMobileDropdown = (e) => {
    document
      .getElementById("navbarSupportedContent")
      .classList.toggle("show-with-trans");
  };

  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <nav className="navbar change navbar-expand-lg" ref={navbarRef}>
      <div className="container">
        <Link href="/" className={`logo ${logoClass && logoClass}`}>
          <img src={appData.lightLogo} alt="EG Logo" ref={logoRef} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          onClick={handleMobileDropdown}
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                href="/"
                className="nav-link"
                style={{
                  color: currentRoute === "/" && "#4cb753",
                  fontWeight: currentRoute === "/" && "bold",
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/products"
                className="nav-link"
                style={{
                  color: currentRoute === "/products" && "#4cb753",
                  fontWeight: currentRoute === "/products" && "bold",
                }}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/works"
                className="nav-link"
                style={{
                  color: currentRoute === "/works" && "#4cb753",
                  fontWeight: currentRoute === "/works" && "bold",
                }}
              >
                Works
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about"
                className="nav-link"
                style={{
                  color: currentRoute === "/about" && "#4cb753",
                  fontWeight: currentRoute === "/about" && "bold",
                }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/blogs"
                className="nav-link"
                style={{
                  color: currentRoute === "/blogs" && "#4cb753",
                  fontWeight: currentRoute === "/blogs" && "bold",
                }}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/contact"
                className="nav-link"
                style={{
                  color: currentRoute === "/contact" && "#4cb753",
                  fontWeight: currentRoute === "/contact" && "bold",
                }}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            <span style={{ opacity: "0.2" }}>|</span>
            <Link
              href="https://www.facebook.com/profile.php?id=61566560664247"
              target="_blank"
              rel=""
              title=""
              style={{
                minWidth: "20px",
                display: "flex",
                textAlign: "center",
                color: "#4cb753",
              }}
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              href="#"
              target="_blank"
              rel=""
              title=""
              style={{
                minWidth: "20px",
                display: "flex",
                textAlign: "center",
                color: "#4cb753",
              }}
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              href="https://www.instagram.com/eg_living.ae/"
              target="_blank"
              rel=""
              title=""
              style={{
                minWidth: "20px",
                display: "flex",
                textAlign: "center",
                color: "#4cb753",
              }}
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              href="#"
              target="_blank"
              rel=""
              title=""
              style={{
                minWidth: "20px",
                display: "flex",
                textAlign: "center",
                color: "#4cb753",
              }}
            >
              <i className="fab fa-youtube"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
