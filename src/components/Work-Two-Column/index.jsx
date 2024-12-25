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
    <section className="works filter-img section-padding">
      <div className="container">
        <div className="row gallery">
          <div className="col-lg-6 items mt-0 interior office-design workstations">
            <div className="section-head mb-0">
              <h3>Our Work</h3>

              <div className="filtering mt-30">
                <div className="filter">
                  <span
                    data-filter="*"
                    className="active"
                    style={{
                      padding: "2px 10px",
                      border: "1px solid #4cb753",
                    }}
                  >
                    All
                  </span>
                  <span
                    data-filter=".interior"
                    style={{
                      padding: "2px 10px",
                      border: "1px solid #4cb753",
                    }}
                  >
                    Modern Office
                  </span>
                  <span
                    data-filter=".office-design"
                    style={{
                      padding: "2px 10px",
                      border: "1px solid #4cb753",
                    }}
                  >
                    Office Design
                  </span>
                  <span
                    data-filter=".workstations"
                    style={{
                      padding: "2px 10px",
                      border: "1px solid #4cb753",
                    }}
                  >
                    Workstations
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items workstations">
            <div className="item">
              <div className="img">
                <img
                  src="/assets/img/works/collaborative-workstation.webp"
                  alt="Workstation Design"
                />
              </div>
              <div className="cont vis">
                <h5>
                  <Link href="#!" title="Workstation Design">
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
                  src="/assets/img/works/corporate-office-interior.webp"
                  alt="Best office interior design"
                />
              </div>
              <div className="cont vis">
                <h5>
                  <Link href="#!">Corporate Office Interior</Link>
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
                  src="/assets/img/works/creative-workspace-design.webp"
                  alt="Office Space"
                />
              </div>
              <div className="cont vis">
                <h5>
                  <Link href="#!">Creative Workspace Design</Link>
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
                  src="/assets/img/works/ergonomic-desk-solutions.webp"
                  alt="Ergonomic Workstations"
                />
              </div>
              <div className="cont vis">
                <h5>
                  <Link href="#!">Ergonomic Desk Solutions</Link>
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
                  src="/assets/img/works/modern-office-workstation.webp"
                  alt="Office Workstation"
                />
              </div>
              <div className="cont vis">
                <h5>
                  <Link href="#!">Modern Office Workstation</Link>
                </h5>
                <span>Office Furniture</span>
                <span>Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
