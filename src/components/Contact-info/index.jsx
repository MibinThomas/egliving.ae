import React from "react";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className="info pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-phone"></span>
              <div className="cont">
                <h6 className="custom-font">Call Us</h6>
                <Link href="tel:+971065448335" title="Call EG Living team">
                  +971 065448335
                </Link>
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-mail-open"></span>
              <div className="cont">
                <h6 className="custom-font">Email Us</h6>
                <Link
                  href="mailto:info@egliving.ae"
                  title="Mail EG Living team"
                >
                  info@egliving.ae
                </Link>
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-map"></span>
              <div className="cont">
                <h6 className="custom-font">Address</h6>
                <p>
                  Near Hashim Super Market, Al Sajaah, Emirates Industrial City,
                  Sharjah, United Arab Emirates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
