import React from "react";

const Form = ({ onClose }) => {
  return (
    <div
      style={{
        backgroundColor: "#00000065",
        width: "100%",
        height: "100%",
        position: "fixed",
        zIndex: "9999",
        backdropFilter: "blur(2px)",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          zIndex: 1000,
        }}
        className="contact cta-form-wrapper"
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            fontSize: "14px",
            fontWeight: "bold",
            cursor: "pointer",
            padding: "3px 8px",
            background: "none",
            border: "1px solid #4cb753",
            color: "#000000 !important",
          }}
        >
          X
        </button>
        <div className="cta-title">
          <h3>Reach Out to Us!</h3>
          <p>
            Share your needs, and we’ll get back to you with the best solution.
          </p>
        </div>
        <div className="form" style={{ padding: "0px", marginTop: "20px" }}>
          <div className="form-row-wrapper">
            <div
              className="cta-img"
              style={{ borderRadius: "8px", overflow: "hidden" }}
            >
              <img
                src="/assets/img/eg-living-mission.jpeg"
                alt="EG Logistics"
                style={{ width: "100%" }}
              />
            </div>

            <div className="cta-form">
              <form id="contact-form" method="post">
                <div className="messages"></div>
                <div className="controls">
                  <div className="form-group">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="form_phone"
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-curve btn-color"
                    style={{
                      padding: "8px 15px",
                      fontSize: "14px",
                      borderRadius: "8px",
                    }}
                  >
                    Enquire Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
