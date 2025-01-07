import React from "react";
import heroData from "../../data/heroData.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";
import Split from "../Split/index";

const IntroWithVertical = () => {
  const [load, setLoad] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(false);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
    }

    const timeout = setTimeout(() => {
      removeSlashFromPagination();
    }, 1000);

    setTimeout(() => {
      setLoad(false);
    });

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="slid-half">
      <div
        id="js-cta-slider"
        className="cta__slider-wrapper nofull swiper-container"
      >
        {!load ? (
          <Swiper
            speed={800}
            parallax={true}
            modules={[Navigation, Pagination, Parallax, Autoplay]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              type: "fraction",
              clickable: true,
              el: paginationRef.current,
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            direction="vertical"
            loop={true}
            grabCursor={true}
            watchSlidesProgress={true}
            touchMoveStopPropagation={false} // Allow touch events to propagate
            touchStartPreventDefault={false} // Don't block native touch behaviors
            onTouchMove={(swiper, event) => {
              // Detect if the user is scrolling vertically
              if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
                swiper.allowTouchMove = false; // Disable Swiper for vertical scrolling
              } else {
                swiper.allowTouchMove = true; // Enable Swiper for horizontal scrolling
              }
            }}
            onSwiper={(swiper) => {
              if (swiper?.slides) {
                for (let i = 0; i < swiper.slides.length; i++) {
                  const slide = swiper.slides[i];
                  if (slide?.childNodes[0]) {
                    slide.childNodes[0].setAttribute(
                      "data-swiper-parallax",
                      0.75 * swiper.height
                    );
                  }
                }
              }

              if (swiper.navigation) {
                swiper.navigation.init();
                swiper.navigation.update();
              }

              if (swiper.pagination) {
                swiper.pagination.init();
                swiper.pagination.update();
              }
            }}
            className="swiper-wrapper cta__slider"
          >
            {heroData.map((slide) => (
              <SwiperSlide
                key={slide.id}
                className="cta__slider-item swiper-slide"
              >
                <div className="media-wrapper slide-inner valign">
                  <div
                    className="bg-img"
                    style={{ backgroundImage: `url(${slide.image})` }}
                    data-overlay-dark="5"
                  ></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-10 offset-lg-1">
                        <div className="caption">
                          <span className="top-corn"></span>
                          <span className="bottom-corn"></span>
                          <div className="custom-font">
                            <Split>
                              <h1
                                data-splitting
                                className="words chars splitting"
                              >
                                {slide.title.first} <br />
                                {slide.title.second}
                              </h1>
                            </Split>
                          </div>
                          {slide?.content && (
                            <p className="mt-10">
                              {slide.content.first} <br />
                              {slide.content.second}
                            </p>
                          )}
                          <Link
                            href="/products"
                            className="btn-curve btn-color mt-30"
                            title="View EG Living Works"
                          >
                            <span>Our Collections</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
        <div className="cta__slider-arrows">
          <i
            id="js-cta-slider-next"
            ref={navigationNextRef}
            className="cta__slider-arrow cta__slider-arrow--next"
          >
            <i className="fas fa-chevron-up"></i>
          </i>
          <i
            id="js-cta-slider-previous"
            ref={navigationPrevRef}
            className="cta__slider-arrow cta__slider-arrow--previous"
          >
            <i className="fas fa-chevron-down"></i>
          </i>
        </div>
      </div>
      <div
        ref={paginationRef}
        className="swiper-pagination top custom-font"
      ></div>
    </section>
  );
};

export default IntroWithVertical;
