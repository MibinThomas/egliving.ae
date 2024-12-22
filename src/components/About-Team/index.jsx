import Link from "next/link";
import React from "react";

const AboutTeam = () => {
  return (
    <section className="team bord section-padding">
      <div className="container">
        <div className="main-header text-center">
          <h3>Master Minds</h3>
          <div className="tex-bg">Team</div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div className="item">
              <div className="img left">
                <img
                  src="/assets/img/team/eg-founder-and-chairman-aboobacer.webp"
                  alt=""
                />
              </div>
              <div className="info">
                <h5>N.C Aboobacer</h5>
                <span>Founder & Chairman</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="img right">
                <img
                  src="/assets/img/team/eg-director-nc-mahamood.webp"
                  alt=""
                />
              </div>
              <div className="info">
                <h5>N.C Mahmood</h5>
                <span>Director</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="img right">
                <img
                  src="/assets/img/team/eg-director-shahul-hameed.webp"
                  alt=""
                />
              </div>
              <div className="info">
                <h5>Shahul Hameed</h5>
                <span>Director</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
