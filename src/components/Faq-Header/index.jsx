import React from "react";

const FaqHeader = ({ title, content, center }) => {
  return (
    <div
      className="work-header bg-img valign"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(/assets/img/custom-furniture-manufactures.webp)",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className={`row ${center ? "justify-content-center" : ""}`}>
          <div className="col-lg-9">
            <div className={`cont ${center ? "text-center" : ""}`}>
              <h1
                className="h1-h1-h1-"
                style={{ fontSize: "36px", marginBottom: "10px" }}
              >
                {typeof title == "object" ? (
                  <>
                    {title.first} <br /> {title.second}
                  </>
                ) : (
                  title
                )}
              </h1>

              <p style={{ color: "#ffffff90", maxWidth: "700px" }}>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqHeader;
