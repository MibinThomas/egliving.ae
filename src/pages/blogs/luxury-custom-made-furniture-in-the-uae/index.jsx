import React from "react";
import Link from "next/link";
import thumparallaxUp from "../../../common/thumparallaxUp";
import MainLayout from "../../../layouts/main";
import { useRouter } from "next/router";

const LuxuryCustomMadeFurniture = () => {
  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);

  const title = "Blog Detail";
  const fullPath = [
    { id: 1, name: "home", url: "/" },
    { id: 2, name: "blogs", url: "/blogs" },
    {
      id: 3,
      name: "Luxury & Custom-Made Furniture in the UAE",
      url: "/blogs/luxury-custom-made-furniture-in-the-uae",
    },
  ];

  return (
    <MainLayout>
      <div>
        <div
          className="pages-header bg-img valign parallaxie"
          style={{
            backgroundImage: `url("/assets/img/blog/luxury-custom-made-furniture-in-the-uae.webp")`,
            backgroundPosition: "center",
          }}
          data-overlay-dark="5"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center cont">
                  <h1>{title}</h1>
                  <div className="path">
                    {fullPath.map((item, index) => (
                      <React.Fragment key={item.id}>
                        {item.url ? (
                          <Link
                            href={item.url}
                            className={
                              router.pathname == item.url ? "active" : ""
                            }
                            title={item.name}
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <span>{item.name}</span>
                        )}
                        {index != fullPath.length - 1 ? <span>/</span> : ""}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="blog-pg single section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="post">
                <div className="title-head">
                  <h2>Luxury & Custom-Made Furniture in the UAE</h2>
                  <div className="info">
                    <p>
                      <Link href="#!">EG Team</Link> /
                      <Link href="#!">January 5, 2025</Link> /
                      <Link href="#!">Luxury Furniture</Link>
                    </p>
                  </div>
                </div>
                <div className="img main-img">
                  <img
                    src="/assets/img/blog/luxury-custom-made-furniture-in-the-uae.webp"
                    alt="Luxury & Custom-Made Furniture in the UAE"
                    title="Luxury & Custom-Made Furniture in the UAE"
                    className="thumparallax"
                    loading="lazy"
                  />
                </div>
                <div className="pt-20 content">
                  <div className="row justify-content-center">
                    <div className="col-lg-12">
                      <div className="cont">
                        <p>
                          When it comes to redefining home and office interiors,
                          nothing speaks sophistication quite like luxury and
                          custom-made furniture. In the UAE, where style meets
                          innovation, Evergreen Furniture is setting a benchmark
                          in creating bespoke furniture that elevates your
                          spaces and complements your lifestyle.
                        </p>
                        <h5>Why Choose Luxury and Custom-Made Furniture?</h5>
                        <p>
                          Custom-made furniture allows you to infuse your
                          personality into every piece, ensuring it aligns
                          perfectly with your design vision. Unlike
                          off-the-shelf options, bespoke furniture caters to
                          your unique preferences, be it size, material, color,
                          or functionality. For those seeking luxury, custom
                          furniture offers an unparalleled opportunity to own
                          something that is not only beautiful but also
                          exclusive.
                        </p>
                        <h5>
                          Evergreen Furniture: Pioneering Customization in the
                          UAE
                        </h5>
                        <p>
                          At Evergreen Furniture, we pride ourselves on being
                          Dubai’s first customization-focused furniture company.
                          Our team of skilled artisans and designers
                          collaborates with clients to craft furniture that
                          reflects elegance and functionality. Whether it’s a
                          modular kitchen, a chic bedroom setup, or innovative
                          storage solutions, we ensure every detail is
                          meticulously crafted to perfection.
                        </p>
                        <h6>Our Specializations:</h6>
                        <ul>
                          <li>
                            <strong>Custom Furniture:</strong> Tailored to your
                            exact needs, our custom furniture ensures that your
                            space feels uniquely yours. From concept to
                            creation, we work closely with you to bring your
                            ideas to life.
                          </li>
                          <li>
                            <strong>Modular Furniture:</strong> Designed for
                            modern living, our modular furniture combines style
                            with versatility, making it perfect for dynamic
                            spaces.
                          </li>
                          <li>
                            <strong>Bedroom Furniture:</strong> Turn your
                            bedroom into a luxurious sanctuary with our
                            exquisitely crafted beds, wardrobes, and storage
                            solutions.
                          </li>
                          <li>
                            <strong>Kitchen Furniture:</strong> Create a
                            functional yet stylish cooking space with our
                            custom-designed modular kitchens, built to maximize
                            space and efficiency.
                          </li>
                        </ul>
                        <h5>The Evergreen Promise</h5>
                        <p>
                          Choosing Evergreen Furniture means investing in
                          quality, craftsmanship, and unparalleled service. Our
                          furniture is not only designed to enhance the
                          aesthetics of your space but also built to stand the
                          test of time. We source premium materials and employ
                          state-of-the-art techniques to ensure every piece is
                          flawless.
                        </p>
                        <h5>Transform Your Space Today</h5>
                        <p>
                          Luxury and custom-made furniture are more than just
                          decor; they are a statement of your taste and
                          lifestyle. With Evergreen Furniture, you can transform
                          your spaces into works of art that combine beauty,
                          comfort, and functionality.
                        </p>
                        <p>
                          Let us help you create furniture that’s as unique as
                          you are. Reach out to us today and redefine the way
                          you live and work.
                        </p>
                        <div className="share-info">
                          <div className="social">
                            <Link
                              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                typeof window !== "undefined"
                                  ? window.location.href
                                  : ""
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link
                              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                                typeof window !== "undefined"
                                  ? window.location.href
                                  : ""
                              )}&text=Check out this article: Luxury & Custom-Made Furniture in the UAE`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fab fa-twitter"></i>
                            </Link>
                          </div>
                          <div className="tags">
                            <Link href="#!">Luxury Furniture</Link>,
                            <Link href="#!">Bespoke Design</Link>,
                            <Link href="#!">Modern Interiors</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pagination">
                  <span>
                    <Link
                      href="/blogs/best-customized-furniture-in-uae"
                      title="Luxury & Custom-Made Furniture in the UAE"
                      hrefLang="en"
                      target="_blank"
                      rel="alternate author"
                    >
                      Prev Post
                    </Link>
                  </span>
                  <span className="icon">
                    <Link href="#!">
                      <i className="fas fa-th-large"></i>
                    </Link>
                  </span>
                  <span className="text-right">
                    <Link
                      href="/blogs/best-customized-furniture-in-uae"
                      title="Luxury & Custom-Made Furniture in the UAE"
                      hrefLang="en"
                      target="_blank"
                      rel="alternate author"
                    >
                      Next Post
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default LuxuryCustomMadeFurniture;
