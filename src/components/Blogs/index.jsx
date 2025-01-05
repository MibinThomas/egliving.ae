/* eslint-disable @next/next/no-img-element */
import React from "react";
import BlogsData from "../../data/blogsData.json";
import Link from "next/link";

const Blogs2 = () => {
  return (
    <section className="blog-grid center bg-gray section-padding">
      <div className="container">
        <div className="text-center section-head">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <h6 className="custom-font wow fadeInDown" data-wow-delay=".3s">
                Latest News
              </h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                Our Blogs
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          {BlogsData.slice(0, 2).map((blog, index) => (
            <div className="col-lg-6" key={blog.id}>
              <div
                className="item wow fadeInUp md-mb50"
                data-wow-delay={index == 0 ? ".3s" : index == 1 ? ".1s" : ".5s"}
              >
                <div className="post-img">
                  <div className="img">
                    <img
                      src={blog.blogBanner}
                      alt={blog.blogTitle}
                      title={blog.blogTitle}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="cont">
                  <div className="info">
                    <Link
                      href={blog.blogSlug}
                      hrefLang="en"
                      target="_blank"
                      title={blog.blogTitle}
                      rel="alternate author"
                    >
                      {blog.blogAuthor}
                    </Link>
                    <Link
                      href={blog.blogSlug}
                      hrefLang="en"
                      target="_blank"
                      title={blog.blogTitle}
                      rel="alternate author"
                    >
                      {blog.blogDate}
                    </Link>
                  </div>

                  <h5 className="playfont">
                    <Link
                      href={blog.blogSlug}
                      hrefLang="en"
                      target="_blank"
                      title={blog.blogTitle}
                      rel="alternate author"
                    >
                      {blog.blogTitle}
                    </Link>
                  </h5>
                  <p>
                    {blog.blogShortDesc.length > 80
                      ? blog.blogShortDesc.substring(0, 80) + "..."
                      : blog.blogShortDesc}
                  </p>

                  <Link
                    href={blog.blogSlug}
                    hrefLang="en"
                    target="_blank"
                    title={blog.blogTitle}
                    rel="alternate author"
                    className="more"
                  >
                    <span className="custom-font">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs2;
