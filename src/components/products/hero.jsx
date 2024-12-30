import React from "react";

const ProductsHero = ({ title, content, center }) => {
  return (
    <div
      className="work-header bg-img valign"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 100%), url(/assets/img/products/bedroom-set/sueno-lite-3door.webp)`,
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div
          className={`row align-items-center ${
            center ? "justify-content-center" : ""
          }`}
        >
          <div className="m-auto text-center col-lg-9">
            <div className={`m-auto cont ${center ? "text-center" : ""}`}>
              <h1 className="h1-h1-h1-"
                style={{
                  fontSize: "46px",
                  marginBottom: "10px",
                }}
              >
                {typeof title === "object" ? (
                  <>
                    {title.first} <br /> {title.second}
                  </>
                ) : (
                  title
                )}
              </h1>

              <p style={{ color: "#ffffff90" }}>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsHero;
