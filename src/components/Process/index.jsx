import React from "react";

const Process = () => {
  return (
    <section
      className="process section-padding bg-img bg-repeat"
      style={{ backgroundImage: `url(/assets/img/dots.png)` }}
    >
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <h6 className="custom-font wow fadeInDown" data-wow-delay=".3s">
                Our Approach
              </h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                Step-by-Step Process
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="item">
              <div
                className="bg-img"
                style={{
                  backgroundImage: `url(/assets/img/process/modern-office-concept.webp)`,
                }}
              >
                <h3 className="numb custom-font">01</h3>
              </div>
              <div className="cont">
                <h6 className="mb-10">Idea Generation</h6>
                <p>
                  We start by brainstorming and developing innovative ideas.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="item">
              <div
                className="bg-img"
                style={{
                  backgroundImage: `url(/assets/img/process/eg-living-creative-design.webp)`,
                }}
              >
                <h3 className="numb custom-font">02</h3>
              </div>
              <div className="cont">
                <h6 className="mb-10">Creative Design</h6>
                <p>Turning concepts into visually appealing designs.</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="item">
              <div
                className="bg-img"
                style={{
                  backgroundImage: `url(/assets/img/process/eg-living-quality-assurance.webp)`,
                }}
              >
                <h3 className="numb custom-font">03</h3>
              </div>
              <div className="cont">
                <h6 className="mb-10">Quality Assurance</h6>
                <p>Ensuring every detail meets our high standards.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".6s">
            <div className="item">
              <div
                className="bg-img"
                style={{
                  backgroundImage: `url(/assets/img/process/eg-living-execution-and-delivery.webp)`,
                }}
              >
                <h3 className="numb custom-font">04</h3>
              </div>
              <div className="cont">
                <h6 className="mb-10">Execution & Delivery</h6>
                <p>Bringing your vision to life with seamless execution.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
