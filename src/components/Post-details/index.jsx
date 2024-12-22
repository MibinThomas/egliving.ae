import React from "react";
import Link from "next/link";
import thumparallaxUp from "../../common/thumparallaxUp";

const PostDetails = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);
  return (
    <>
      <section className="blog-pg single section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="post">
                <div className="title-head">
                  <h2>Transforming Living Spaces: The Vision of EG Living</h2>
                  <div className="info">
                    <p>
                      <Link href="#">John Doe</Link>/
                      <Link href="#">December 10, 2024</Link>/
                      <Link href="#">Interior Design</Link>
                    </p>
                  </div>
                </div>
                <div className="img main-img">
                  <img
                    src="/assets/img/blog/eg-living-office-furnitures.webp"
                    alt=""
                    className="thumparallax"
                  />
                </div>
                <div className="content pt-20">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="cont">
                        <div className="spacial">
                          <p>
                            At EG Living, we believe in creating spaces that not
                            only look beautiful but also feel like home. Our
                            team of talented designers brings visions to life,
                            blending functionality and style in every project.
                          </p>
                        </div>
                        <p>
                          Our approach to interior design is centered on
                          innovation and comfort. Every project we take on is
                          treated as a unique opportunity to elevate the
                          standard of living through design. Whether it’s a
                          modern living room or a luxurious bedroom, we ensure
                          that every corner reflects the essence of EG Living.
                        </p>

                        <h6>- Creating Personalized, Functional Spaces</h6>

                        <p>
                          We know that every individual has different tastes and
                          preferences. That's why we collaborate closely with
                          our clients to ensure the design speaks to their
                          personality while addressing their lifestyle needs.
                          Our goal is to enhance not just the appearance, but
                          also the experience of living in the space.
                        </p>

                        <ul>
                          <li>
                            <span>01</span> Designing spaces that inspire
                            comfort.
                          </li>
                          <li>
                            <span>02</span> Tailoring every detail to fit client
                            needs.
                          </li>
                          <li>
                            <span>03</span> Creating functional yet elegant
                            interiors.
                          </li>
                          <li>
                            <span>04</span> Bringing life to every room.
                          </li>
                          <li>
                            <span>05</span> Focusing on sustainability in
                            design.
                          </li>
                        </ul>

                        <div className="quotes text-center">
                          <p>
                            “Design is not just what it looks like and feels
                            like. Design is how it works.” – Steve Jobs
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-10">
                              <img
                                src="/assets/img/blog/eg-living-office-furnitures.webp"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-10">
                              <img
                                src="/assets/img/blog/eg-living-office-furnitures.webp"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <p>
                          EG Living’s portfolio of completed projects showcases
                          our versatility and commitment to delivering
                          exceptional interiors. We work with both residential
                          and commercial spaces, creating unique environments
                          that cater to each client's needs and vision.
                        </p>
                        <div className="share-info">
                          <div className="social">
                            <Link href="#">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link href="#">
                              <i className="fab fa-twitter"></i>
                            </Link>
                            <Link href="#">
                              <i className="fab fa-behance"></i>
                            </Link>
                          </div>
                          <div className="tags">
                            <Link href="#">Design</Link>,
                            <Link href="#">Sustainability</Link>,
                            <Link href="#">EG Living Projects</Link>
                          </div>
                        </div>
                      </div>
                      <div className="author">
                        <div className="author-img">
                          <img
                            src="/assets/img/blog/person-sample.png"
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <h6>
                            <span>author :</span> Emma Thompson
                          </h6>
                          <p>
                            Emma is the lead designer at EG Living, with over a
                            decade of experience in transforming spaces. She is
                            passionate about sustainable design and creating
                            environments that are both beautiful and functional.
                          </p>
                          <div className="social">
                            <a href="#">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                              <i className="fab fa-behance"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pagination">
                  <span>
                    <Link href="#">Prev Post</Link>
                  </span>
                  <span className="icon">
                    <Link href="#">
                      <i className="fas fa-th-large"></i>
                    </Link>
                  </span>
                  <span className="text-right">
                    <Link href="#">Next Post</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostDetails;
