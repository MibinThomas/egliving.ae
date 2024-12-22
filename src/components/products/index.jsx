/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

// Importing data
import filterTags from "./data/filterTags.json";
import bedroomSet from "./data/bedroomSet.json";
import centerTable from "./data/centerTable.json";
import bookShelf from "./data/bookShelf.json";
import chestDrawer from "./data/chestDrawer.json";
import lcdUnits from "./data/lcdUnits.json";
import fileRack from "./data/fileRack.json";
import cornerRack from "./data/cornerRack.json";

// Combine all product data into a single array
const allProducts = [
  ...bedroomSet,
  ...centerTable,
  ...bookShelf,
  ...chestDrawer,
  ...lcdUnits,
  ...fileRack,
  ...cornerRack,
];

const Products = () => {
  useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);

  return (
    <section className="works filter-img four-col section-padding">
      <div className="container-fluid">
        {/* Filtering Buttons */}
        <div className="filtering text-center mb-30">
          <div className="filter">
            <span data-filter="*" className="active">
              All
            </span>
            {Object.keys(filterTags).map((key) => (
              <span key={key} data-filter={`.${key}`}>
                {filterTags[key]}
              </span>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="row gallery">
          {allProducts.map((product) => (
            <div
              key={product.id}
              className={`col-lg-3 col-md-6 items ${product.tag}`}
            >
              <div className="item">
                <div className="img">
                  <img src={product.imgSrc} alt={product.name} />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="#!">{product.name}</Link>
                  </h5>
                  <span>{filterTags[product.tag]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
