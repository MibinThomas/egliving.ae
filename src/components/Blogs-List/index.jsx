/* eslint-disable @next/next/no-img-element */
import React from "react";
import blogsData from "../../data/blogsData.json";
import Link from "next/link";
import thumparallaxUp from "../../common/thumparallaxUp";

const BlogsList = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);

  return (
    <section className="blog-pg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="posts">
              {blogsData.map((item) => (
                <div className="item mb-80" key={item.id}>
                  <div className="img">
                    <Link
                      href={item.blogSlug}
                      title={item.blogTitle}
                      hrefLang="en"
                      target="_blank"
                    >
                      <img
                        src={item.blogBanner}
                        alt={item.blogTitle}
                        className="thumparallax"
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <div className="date">
                      <h5>
                        <Link
                          href={item.blogSlug}
                          title={item.blogTitle}
                          hrefLang="en"
                          target="_blank"
                        >
                          <span className="num">
                            {new Date(item.blogDate).getDate()}
                          </span>
                          <span>
                            {new Date(item.blogDate).toLocaleString("default", {
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </Link>
                      </h5>
                    </div>
                    <div className="cont">
                      <h4 className="title">
                        <Link
                          href={item.blogSlug}
                          title={item.blogTitle}
                          hrefLang="en"
                          target="_blank"
                        >
                          {item.blogTitle}
                        </Link>
                      </h4>
                      <p>{item.blogShortDesc}</p>
                      <Link
                        href={item.blogSlug}
                        title={item.blogTitle}
                        hrefLang="en"
                        target="_blank"
                        className="more"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="pagination">
                <span className="active">
                  <Link href="#">1</Link>
                </span>
                <span>
                  <Link href="#">2</Link>
                </span>
                <span>
                  <Link href="#">
                    <i className="fas fa-angle-right"></i>
                  </Link>
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsList;
