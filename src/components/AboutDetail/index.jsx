import React from "react";

const AboutUs4 = () => {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="numbers">
              <div className="row">
                <div className="col-sm-6">
                  <div className="item mb-50">
                    <h3>
                      <span className="nbr custom-font">352</span>
                    </h3>
                    <h6>Projects Completed</h6>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="item mb-50">
                    <h3>
                      <span className="nbr custom-font">567</span>
                    </h3>
                    <h6>Satisfied Clients</h6>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="item">
                    <h3>
                      <span className="nbr custom-font">656</span>
                      <i>M</i>
                    </h3>
                    <h6>Monthly Revenue</h6>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="item">
                    <h3>
                      <span className="nbr custom-font">17</span>
                    </h3>
                    <h6>Awards Won</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="txt-cont">
              <p className="mb-20">
                Crafting Spaces, Setting New Standards. Founded in 2022, we
                leverage over 20 years of industry experience in every design we
                create. Our dedication to exceptional quality and unmatched
                value positions us as leaders in a constantly evolving market.
              </p>
              <p>
                From cutting-edge office solutions to flexible commercial
                designs, EG Living’s curated collection seamlessly combines
                practicality with the latest trends, redefining modular living.
                Transform your space with EG Living – where innovation and style
                come together in every detail.
              </p>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "8rem" }}>
          <div className="col-lg-6">
            <h2
              style={{
                fontSize: "2em",
                margin: "0.5rem 0rem",
                marginTop: "2rem",
                color: "#4cb753",
              }}
            >
              Vision
            </h2>
            <p>
              At EG Living, our mission is simple: to exceed expectations with
              unmatched craftsmanship, quality, and convenience. We listen
              carefully, understand your needs, and provide tailored solutions
              that enhance every space. Dedicated to sustainability and ethical
              practices, we build lasting relationships while making a positive
              impact on both industry and the environment. We are EG Living-
              where every piece represents a commitment to excellence and
              integrity
            </p>
          </div>
          <div className="col-lg-6 img-img">
            <div style={{ maxWidth: "70%", margin: "auto" }}>
              <img src="/assets/img/eg-living-vision.jpeg" alt="" />
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "8rem" }}>
          <div className="col-lg-6 img-img">
            <div style={{ maxWidth: "70%", margin: "auto" }}>
              <img src="/assets/img/eg-living-mission.jpeg" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <h2
              style={{
                fontSize: "2em",
                margin: "0.5rem 0rem",
                marginTop: "2rem",
                color: "#4cb753",
              }}
            >
              Mission
            </h2>
            <p>
              At EG Living, we imagine a world where furniture goes beyond
              functionality to become truly transformative. Our mission is to
              pioneer innovative modular solutions, offering unparalleled
              customization and delivering exceptional value. With our
              forward-thinking approach, we're not just designing furniture;
              we're crafting inspiring spaces that reflect uniqueness, style,
              and practicality. Step into the future of furniture-step into EG
              Living
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs4;
