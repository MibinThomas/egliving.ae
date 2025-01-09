import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { WorkTwoColumn } from "../../components/Work-Two-Column";
import Head from "next/head";

const Work1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <Head>
        <title>
          EG Living Portfolio | Best Customized and Modular Furniture Projects
        </title>
        <meta
          name="description"
          content="Explore our portfolio of completed projects at EG Living, featuring bespoke office and home furniture solutions in the UAE."
        />
        <meta
          name="keywords"
          content="Top Furniture Manufacturing & Office Fit-Out Company, Best Customized Furniture UAE, High-End Modular Architecture Company in UAE"
        />
        <meta
          property="og:title"
          content="EG Living Portfolio | Best Customized and Modular Furniture Projects"
        />
        <meta
          property="og:description"
          content="Explore our portfolio of completed projects at EG Living, featuring bespoke office and home furniture solutions in the UAE."
        />
        <meta
          property="og:image"
          content="https://egliving.ae/og-image-works.jpg"
        />
        <meta property="og:url" content="https://egliving.ae/works" />
        <meta property="og:type" content="article" />
        <meta
          name="twitter:title"
          content="EG Living Portfolio | Best Customized and Modular Furniture Projects"
        />
        <meta
          name="twitter:description"
          content="Explore our portfolio of completed projects at EG Living, featuring bespoke office and home furniture solutions in the UAE."
        />
        <meta
          name="twitter:image"
          content="https://egliving.ae/og-image-works.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <WorkHeader
        title={{
          first: "Crafting Inspiring You Dream spaces",
          second: "Where Design Meets Functionality",
        }}
        content="EG Living specializes in modern, functional custom furniture that enhance productivity and creativity. Our high-quality, ergonomic solutions are designed to fit businesses' needs."
      />
      <WorkTwoColumn />
    </MainLayout>
  );
};

export default Work1;
