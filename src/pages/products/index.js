import React from "react";
import ProductsHero from "../../components/products/hero";
import MainLayout from "../../layouts/main";
import Products from "../../components/products";
import Head from "next/head";

const Work1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <Head>
        <title>
          Products | EG Living | Modern & Customized Furniture Solutions in UAE
        </title>
        <meta
          name="description"
          content="Explore EG Living’s curated collection of modern, customized furniture for both homes and offices in the UAE. Perfect for every space."
        />
        <meta
          name="keywords"
          content="Modern Home Furniture in UAE, Best Furniture in Dubai, Custom Furniture Dubai, Custom Made Furniture Dubai, Luxury Furniture UAE"
        />
        <meta
          property="og:title"
          content="Products | EG Living | Modern & Customized Furniture Solutions in UAE"
        />
        <meta
          property="og:description"
          content="Explore EG Living’s curated collection of modern, customized furniture for both homes and offices in the UAE. Perfect for every space."
        />
        <meta
          property="og:image"
          content="https://egliving.ae/og-image-products.jpg"
        />
        <meta property="og:url" content="https://egliving.ae/products" />
        <meta property="og:type" content="product" />
        <meta
          name="twitter:title"
          content="Products | EG Living | Modern & Customized Furniture Solutions in UAE"
        />
        <meta
          name="twitter:description"
          content="Explore EG Living’s curated collection of modern, customized furniture for both homes and offices in the UAE. Perfect for every space."
        />
        <meta
          name="twitter:image"
          content="https://egliving.ae/og-image-products.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
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
