import React from "react";
import Slider from "react-slick";
import testimonialsData from "../../data/testimonials.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  // Slider settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-head">
          <h6>Testimonials</h6>
          <h4>What People Say</h4>
        </div>
        <Slider {...sliderSettings}>
          {testimonialsData.map((item) => (
            <div key={item.id} className="testimonial-item">
              <img
                src={item.image}
                alt={item.username}
                className="testimonial-img"
              />
              <p className="testimonial-content">&quot;{item.content}&quot;</p>
              <h6 className="testimonial-username">{item.username}</h6>
              <span className="testimonial-title">{item.usertitle}</span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
