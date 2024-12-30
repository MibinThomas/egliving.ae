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
    <section className="blog-pg single section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="title-head">
                <h2>
                  Elevate Your Space with EG Living: Modular Designs for a
                  Better Tomorrow
                </h2>
                <div className="info">
                  <p>
                    <Link href="#">EG Team</Link>/
                    <Link href="#">December 30, 2024</Link>/
                    <Link href="#">Interior Design</Link>
                  </p>
                </div>
              </div>
              <div className="img main-img">
                <img
                  src="/assets/img/blog/modular-living.jpg"
                  alt="Modular Living Solutions"
                  className="thumparallax"
                />
              </div>
              <div className="pt-20 content">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <p>
                        Discover how EG Living, a leader in innovative{" "}
                        <strong>modular furniture design</strong> and{" "}
                        <strong>sustainable interior solutions</strong>, is
                        transforming living and working environments. With a
                        deep focus on functionality, aesthetics, and
                        adaptability, EG Living empowers individuals and
                        businesses to make the most of their spaces.
                      </p>
                      <p>
                        In today's fast-paced world, flexibility is essential.
                        EG Living answers the call by delivering{" "}
                        <strong>space-saving designs</strong>, sustainable
                        solutions, and personalized modular concepts that cater
                        to diverse lifestyles and needs. Whether it’s a modern
                        apartment or a corporate office, we blend{" "}
                        <strong>cutting-edge technology</strong> with timeless
                        designs to create spaces you’ll love to live and work
                        in.
                      </p>

                      <h6>- The EG Living Difference</h6>

                      <p>
                        At EG Living, we go beyond conventional design to create
                        interiors that resonate with your personality and
                        purpose. Here’s what sets us apart:
                      </p>

                      <ul>
                        <li>
                          <span>01</span> <strong>Space Optimization</strong>:
                          Every design maximizes usability without compromising
                          aesthetics.
                        </li>
                        <li>
                          <span>02</span> <strong>Sustainability</strong>: From
                          eco-friendly materials to energy-efficient concepts,
                          we prioritize green living.
                        </li>
                        <li>
                          <span>03</span> <strong>Personalization</strong>:
                          Tailored solutions that fit individual styles and
                          requirements.
                        </li>
                        <li>
                          <span>04</span> <strong>Innovation</strong>:
                          Leveraging advanced design technologies for superior
                          functionality.
                        </li>
                        <li>
                          <span>05</span> <strong>Affordability</strong>:
                          High-quality, budget-friendly options for everyone.
                        </li>
                      </ul>

                      <h6>- Our Commitment to Sustainability</h6>

                      <p>
                        As a brand, EG Living is deeply committed to creating a
                        sustainable future. By incorporating{" "}
                        <strong>recycled materials</strong>, reducing waste, and
                        emphasizing durable designs, we ensure our projects
                        stand the test of time while minimizing environmental
                        impact.
                      </p>

                      <h6>- The Future of Modular Living</h6>

                      <p>
                        EG Living envisions a world where spaces adapt to
                        individuals, not the other way around. Our modular
                        solutions cater to ever-changing lifestyles, making them
                        ideal for urban settings, startups, and growing
                        families. Embrace the future of{" "}
                        <strong>flexible, functional design</strong> with us.
                      </p>
                      <div className="share-info">
                        <div className="social">
                          <Link href="#">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </div>
                        <div className="tags">
                          <Link href="#">Modular Design</Link>,
                          <Link href="#">Sustainability</Link>,
                          <Link href="#">Modern Interiors</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="pagination">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostDetails;
