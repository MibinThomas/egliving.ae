import React from "react";
import Link from "next/link";

const ProjectIntro = () => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>Introduction</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
            <div className="text">
              <p>
                EG Living is committed to creating an exceptional living
                experience for our clients through innovative digital solutions.
                By integrating cutting-edge technology and design, we deliver
                tailored platforms that enhance community engagement and
                resource management.
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Client</h6>
              <p>
                <Link href="#">egliving.ae</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Date</h6>
              <p>15 December 2024</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Categories</h6>
              <p>
                <Link href="#">Modern</Link>, <Link href="#">Workstations</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item mt-30">
              <h6>Tags</h6>
              <p>
                <Link href="#">Innovative</Link>,{" "}
                <Link href="#">Modern Design</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;
