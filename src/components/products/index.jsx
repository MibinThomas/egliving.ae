import React, { useEffect, useState } from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

import filterTags from "./data/filterTags.json";
import bedroomSet from "./data/bedroomSet.json";
import centerTable from "./data/centerTable.json";
import bookShelf from "./data/bookShelf.json";
import chestDrawer from "./data/chestDrawer.json";
import lcdUnits from "./data/lcdUnits.json";
import fileRack from "./data/fileRack.json";
import cornerRack from "./data/cornerRack.json";

const allProducts = [
  ...bedroomSet,
  ...centerTable,
  ...bookShelf,
  ...chestDrawer,
  ...lcdUnits,
  ...fileRack,
  ...cornerRack,
];

const ITEMS_PER_PAGE = 15;

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() => {
    setVisibleProducts(
      allProducts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      )
    );
  }, [currentPage]);

  useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, [visibleProducts]);

  const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="works filter-img four-col section-padding">
      <div className="container-fluid">
        {/* Filtering Buttons */}
        <div className="filtering text-center mb-30">
          <div className="filter">
            <span
              data-filter="*"
              className="active"
              style={{ padding: "2px 8px", border: "1px solid #4cb753" }}
            >
              All
            </span>
            {Object.keys(filterTags).map((key) => (
              <span
                key={key}
                data-filter={`${key}`}
                style={{ padding: "2px 8px", border: "1px solid #4cb753" }}
              >
                {filterTags[key]}
              </span>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="row gallery">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className={`col-lg-3 col-md-6 items ${product.tag}`}
            >
              <div className="item">
                <div className="img">
                  <img
                    src={product.imgSrc}
                    alt={product.name}
                    title={product.name}
                    loading="lazy"
                  />
                </div>
                <div className="cont">
                  <h5>
                    <Link href="#!" title={product.name}>
                      {product.name}
                    </Link>
                  </h5>
                  <span>{filterTags[product.tag]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination text-center mt-30">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="btn btn-prev"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`btn ${currentPage === index + 1 ? "active" : ""}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="btn btn-next"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
