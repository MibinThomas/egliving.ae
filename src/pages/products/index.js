import React from "react";
import ProductsHero from "../../components/products/hero";
import MainLayout from "../../layouts/main";
import Products from "../../components/products";

const Work1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <ProductsHero
        title={{
          first: "Elegant and Functional",
          second: "Furniture for Every Space",
        }}
        content="EG Living specializes in modern, functional office furniture and workstations that enhance productivity and creativity. Our high-quality, ergonomic solutions are designed to fit businesses' needs."
      />
      <Products />
    </MainLayout>
  );
};

export default Work1;
