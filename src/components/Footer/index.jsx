import React, { useState } from "react";
import Link from "next/link";
import BlogsData from "../../data/blogsData.json";

const Footer = ({ classText }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    // Send email to backend (or store it for your purpose)
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("Subscribed successfully!");
        setEmail(""); // Reset the email field
      } else {
        const error = await response.json();
        setStatus(`Failed to subscribe: ${error.message}`);
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error during subscription:", error);
    }
  };

  return (
    <footer
      className={`${classText ? classText : ""}`}
      style={{ borderTop: "1px solid #e5e5e5" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Official Address</h6>
                    <p>
                      Near Hashim Super Market, Al Sajaah, Emirates Industrial
                      City, Sharjah, United Arab Emirates
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <Link
                      href="mailto:info@egliving.ae"
                      title="Raise a mail"
                      style={{
                        color: "#888",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "2",
                        margin: 0,
                      }}
                    >
                      info@egliving.ae
                    </Link>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <Link
                      href="tel:+971065448335"
                      title="Call Us Now"
                      style={{
                        color: "#888",
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "2",
                        margin: 0,
                      }}
                    >
                      +971 065448335
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent Blogs</h5>
              </div>
              <ul>
                {BlogsData.slice(0, 2).map((blog) => (
                  <li key={blog.id}>
                    <div className="im">
                      <Link
                        href={`/${blog.blogSlug}`}
                        title={blog.blogTitle}
                        target="_blank"
                        rel="alternate author"
                        hrefLang="en"
                      >
                        <img
                          src={blog.blogBanner}
                          alt={blog.blogTitle}
                          title={blog.blogTitle}
                          loading="lazy"
                          style={{ width: "100px", marginRight: "10px" }}
                        />
                      </Link>
                    </div>
                    <div className="sm-post">
                      <Link
                        href={`/${blog.blogSlug}`}
                        title={blog.blogTitle}
                        target="_blank"
                        rel="alternate author"
                        hrefLang="en"
                      >
                        <p>
                          {blog.blogTitle.length > 35
                            ? blog.blogTitle.substring(0, 35) + "..."
                            : blog.blogTitle}
                        </p>
                      </Link>
                      <span className="date">{blog.blogDate}</span>
                    </div>
                  </li>
                ))}
                <li>
                  <div className="subscribe">
                    <form onSubmit={handleEmailSubmit}>
                      <input
                        type="email"
                        placeholder="Type Your Email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                      />
                      <button
                        type="submit"
                        className="subs pe-7s-paper-plane"
                      />
                    </form>
                    <p>{status}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img
                  src="/assets/img/logo/eg_logo-full.svg"
                  alt="EG Living"
                  title="EG Living"
                />
              </div>
              <div className="social">
                <Link
                  href="https://www.facebook.com/profile.php?id=61566560664247"
                  target="_blank"
                  title="Follow Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="#" target="_blank" title="Follow Twitter">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  href="https://www.instagram.com/eg_living.ae/"
                  target="_blank"
                  title="Follow Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link href="#" target="_blank" title="Subscribe Youtube">
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
              <div className="copy-right">
                <p>© 2022, EG Living. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
