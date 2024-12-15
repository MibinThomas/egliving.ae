import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

export const WorkTwoColumn = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="works filter-img section-padding">
        <div className="container">
          <div className="row gallery">
            <div className="col-lg-6 items mt-0 interior office-design workstations">
              <div className="section-head mb-0">
                <h3>Our Work</h3>

                <div className="filtering mt-30">
                  <div className="filter">
                    <span data-filter="*" className="active">
                      All
                    </span>
                    <span data-filter=".interior">Modern Office</span>
                    <span data-filter=".office-design">Office Design</span>
                    <span data-filter=".workstations">Workstations</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items workstations">
              <div className="item">
                <div className="img">
                  <img
                    src="/assets/img/works/collaborative-workstation.jpg"
                    alt="Workstation Design"
                  />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">
                      Collaborative Workstation
                    </Link>
                  </h5>
                  <span>Modern Office</span>
                  <span>Ergonomic Design</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items interior office-design">
              <div className="item">
                <div className="img">
                  <img
                    src="/assets/img/works/corporate-office-interior.jpg"
                    alt="Interior Office"
                  />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">
                      Corporate Office Interior
                    </Link>
                  </h5>
                  <span>Office Design</span>
                  <span>Contemporary</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items office-design">
              <div className="item">
                <div className="img">
                  <img
                    src="/assets/img/works/creative-workspace-design.jpg"
                    alt="Office Space"
                  />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">
                      Creative Workspace Design
                    </Link>
                  </h5>
                  <span>Innovative Design</span>
                  <span>Flexible Space</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items workstations">
              <div className="item">
                <div className="img">
                  <img
                    src="/assets/img/works/ergonomic-desk-solutions.jpg"
                    alt="Ergonomic Workstations"
                  />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">
                      Ergonomic Desk Solutions
                    </Link>
                  </h5>
                  <span>Workstation</span>
                  <span>Ergonomic</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 items office-design">
              <div className="item">
                <div className="img">
                  <img
                    src="/assets/img/works/modern-office-workstation.jpg"
                    alt="Office Workstation"
                  />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">
                      Modern Office Workstation
                    </Link>
                  </h5>
                  <span>Office Furniture</span>
                  <span>Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
