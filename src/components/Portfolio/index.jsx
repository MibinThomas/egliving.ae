import React from "react";
import Link from "next/link";
import worksCardEffect from "../../common/worksCardEffect";

const Portfolio2 = () => {
  React.useEffect(() => {
    worksCardEffect();
  }, []);
  return (
    <section className="portfolio full-bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 egColumn current" data-tab="tab-1">
            <div className="info">
              <h6 className="custom-font">Work Type</h6>
              <h5>Office Space Designs</h5>
            </div>
            <div className="more">
              <Link href="#!" title="View Project">
                View Project <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 egColumn" data-tab="tab-2">
            <div className="info">
              <h6 className="custom-font">Work Type</h6>
              <h5>Modern Bedroom</h5>
            </div>
            <div className="more">
              <Link href="#!" title="View Project">
                View Project <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 egColumn" data-tab="tab-3">
            <div className="info">
              <h6 className="custom-font">Work Type</h6>
              <h5>Apartment Renovation</h5>
            </div>
            <div className="more">
              <Link href="#!" title="View Project">
                View Project <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 egColumn" data-tab="tab-4">
            <div className="info">
              <h6 className="custom-font">Work Type</h6>
              <h5>Modern Office</h5>
            </div>
            <div className="more">
              <Link href="#!" title="View Project">
                View Project <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="glry-img">
        <div
          id="tab-1"
          className="bg-img tab-img current"
          style={{
            backgroundImage: `url(/assets/img/portfolio/full/eg-living_office-space.jpg)`,
          }}
          data-overlay-dark="2"
        ></div>
        <div
          id="tab-2"
          className="bg-img tab-img"
          style={{
            backgroundImage: `url(/assets/img/portfolio/full/eg-living_bedroom-furniture.jpg)`,
          }}
          data-overlay-dark="2"
        ></div>
        <div
          id="tab-3"
          className="bg-img tab-img"
          style={{
            backgroundImage: `url(/assets/img/portfolio/full/eg-living_apartment-furniture.jpg)`,
          }}
          data-overlay-dark="2"
        ></div>
        <div
          id="tab-4"
          className="bg-img tab-img"
          style={{
            backgroundImage: `url(/assets/img/portfolio/full/eg-living_modern-office.jpg)`,
          }}
          data-overlay-dark="2"
        ></div>
      </div>
    </section>
  );
};

export default Portfolio2;
