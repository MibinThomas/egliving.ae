/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = ({ classText }) => {
  return (
    <footer className={`${classText ? classText : ""}`}>
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
                <li>
                  <div className="img">
                    <Link href="/blog-details">
                      <img
                        src="/assets/img/blog/eg-living-office-furnitures.jpg"
                        alt=""
                      />
                    </Link>
                  </div>

                  <div className="sm-post">
                    <Link href="/blog-details">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Totam possimus.
                      </p>
                    </Link>
                    <span className="date">14 Jan 2024</span>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link href="/blog-details">
                      <img
                        src="/assets/img/blog/eg-living-office-furnitures.jpg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/blog-details">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Totam possimus.
                      </p>
                    </Link>
                    <span className="date">14 Jan 2024</span>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img
                  src="/assets/img/logo/eg_logo-full-white.png"
                  alt="EG Living"
                />
              </div>
              <div className="social">
                <Link href="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link href="#">
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
