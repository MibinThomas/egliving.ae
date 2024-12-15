import React from "react";
import Team1Data from "../../data/team1.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

class Team1 extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="navs mt-30 wow fadeInUp" data-wow-delay=".3s">
        <span className="prev" onClick={() => this.slider.slickPrev()}>
          <i className="fas fa-long-arrow-alt-left"></i>
        </span>
        <span className="next" onClick={() => this.slider.slickNext()}>
          <i className="fas fa-long-arrow-alt-right"></i>
        </span>
      </div>
    );
  };
  render() {
    return (
      <section className="team section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="tit">
                <h6 className="mb-10 wow fadeInDown" data-wow-delay=".3s">
                  Meet the Visionaries
                </h6>
                <h3 className="playfont wow flipInX" data-wow-delay=".5s">
                  Our Leadership Team
                </h3>
                <p className="wow fadeInUp" data-wow-delay=".3s">
                  Our leadership team is made up of experienced professionals
                  who bring their expertise, vision, and dedication to every
                  project. From the founder's innovative ideas to the directors'
                  strategic insights, we work together to drive success and
                  growth at every level.
                </p>

                {this.renderArrows()}
              </div>
            </div>
            <div className="col-lg-7">
              <Slider
                className="team-container"
                {...{
                  ref: (c) => (this.slider = c),
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: true,
                  dots: false,
                  autoplay: true,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 2,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                      },
                    },
                  ],
                }}
              >
                {Team1Data.map((item) => (
                  <div
                    className="item wow fadeInUp"
                    data-wow-delay=".3s"
                    key={item.id}
                  >
                    <div className="img wow">
                      <img src={item.image} alt="" />
                      <div className="social">
                        <Link href={item.facebook}>
                          <i className="fab fa-facebook-f"></i>
                        </Link>

                        <Link href={item.twitter}>
                          <i className="fab fa-twitter"></i>
                        </Link>

                        <Link href={item.behance}>
                          <i className="fab fa-behance"></i>
                        </Link>

                        <Link href={item.linkedin}>
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="info">
                      <h5>{item.username}</h5>
                      <span>{item.usertitle}</span>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div
          className="dots-half bg-img bg-repeat"
          style={{ backgroundImage: "url(/assets/img/dots.png" }}
        ></div>
      </section>
    );
  }
}

export default Team1;
