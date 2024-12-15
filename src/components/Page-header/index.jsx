import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const PageHeader = ({ title, fullPath, image }) => {
  const router = useRouter();
  return (
    <div
      className="pages-header bg-img valign parallaxie"
      style={{
        backgroundImage: `url(${
          !image
            ? "/assets/img/about-eg-living-best-furniture-in-dubai.jpg"
            : image
        })`,
        backgroundPosition: "center",
      }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>{title}</h1>
              <div className="path">
                {fullPath.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <Link
                      href={item.url}
                      className={router.pathname == item.url ? "active" : ""}
                    >
                      {item.name}
                    </Link>
                    {index != fullPath.length - 1 ? <span>/</span> : ""}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
