import React from "react";

const Chat = () => {
  const phone = "+971561998245";
  const message =
    "Hello EG Team, I would like to know more about your services.";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div
    className="whatsapp-chat-btn"
      style={{
        position: "fixed",
        bottom: "30px",
        left: "30px",
        background: "#4cb753 !important",
        backgroundColor: "#4cb753 !important",
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
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "30px",
          left: "30px",
          background: "#4cb753 !important",
          backgroundColor: "#4cb753 !important",
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
