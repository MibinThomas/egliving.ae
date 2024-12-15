import React from "react";

const Chat = () => {
  return (
    <div>
      <a
        href="https://wa.me/+971065448335?text=Hello%20EG%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "30px",
          left: "30px",
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "50%",
          width: "44px",
          height: "44px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          zIndex: 1000,
        }}
      >
        <i className="fab fa-whatsapp" style={{ fontSize: "28px" }}></i>
      </a>
    </div>
  );
};

export default Chat;
