import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const PageHeader = ({ title, fullPath, image }) => {
  const router = useRouter();

  console.log(fullPath);

  return (
    <div
      className="pages-header bg-img valign parallaxie"
      style={{
        backgroundImage: `url(${
          !image
            ? "/assets/img/blog/eg-living-customized-home-living.webp"
            : image
        })`,
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
                        className={router.pathname == item.url ? "active" : ""}
                        title={item.name}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span>{item.name}</span> // Fallback if `url` is undefined
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
  );
};

export default PageHeader;
