// src/components/Form/index.jsx
import React, { useState } from "react";

const Form = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Sending form data to the correct API route
      const response = await fetch("../../api/sendEmail.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

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
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="messages"></div>
                <div className="controls">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
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
                <p>{status}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
