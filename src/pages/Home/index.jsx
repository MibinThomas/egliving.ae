import React, { useState, useEffect } from "react";
import Head from "next/head";
import LightLayout from "../../layouts/light";

import Form from "../../components/Form";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import AboutUs from "../../components/AboutUs";
import Portfolio from "../../components/Portfolio";
import Process from "../../components/Process";
import Team from "../../components/Team";
import Testimonials from "../../components/Testimonials";
import Blogs from "../../components/Blogs";
import FAQs from "../../components/FAQs";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    document.querySelector("body").classList.add("homepage");

    const timer = setTimeout(() => {
      setShowForm(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LightLayout>
      <Head>
        <title>
          EG Living | Custom Furniture & Modular Design Experts in UAE
        </title>
        <meta
          name="description"
          content="EG Living offers high-end customized furniture and modern office solutions in the UAE. Transform your space with luxury, functionality, and style."
        />
        <meta
          name="keywords"
          content="Best Customized Furniture Dubai | Leading Office Furniture Manufacturer Supplier in Dubai UAE | Modern Office Furniture in UAE | Best Furniture in Dubai | EG Living | Custom Furniture Solutions UAE | Modular Furniture Design | Bespoke Furniture Dubai | Modular Living Spaces UAE | Luxury Custom Furniture UAE | Sustainable Furniture Dubai | Modular Office Solutions UAE | High-End Custom Furniture | Tailored Furniture Designs | Modern Modular Kitchens UAE | Innovative Living Spaces Dubai | Sustainable Home Furniture UAE | Custom Modular Architecture Dubai | Flexible Space Design UAE | Custom Luxury Furniture Online UAE | Expert Furniture Craftsmanship UAE"
        />
        <meta
          property="og:title"
          content="EG Living | Best Customized Furniture in UAE & Modern Office Solutions"
        />
        <meta
          property="og:description"
          content="EG Living offers high-end customized furniture and modern office solutions in the UAE. Transform your space with luxury, functionality, and style."
        />
        <meta
          property="og:image"
          content="https://egliving.ae/og-image-home.jpg"
        />
        <meta property="og:url" content="https://egliving.ae" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="EG Living | Best Customized Furniture in UAE & Modern Office Solutions"
        />
        <meta
          name="twitter:description"
          content="EG Living offers high-end customized furniture and modern office solutions in the UAE. Transform your space with luxury, functionality, and style."
        />
        <meta
          name="twitter:image"
          content="https://egliving.ae/og-image-home.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {/* {showForm && <Form onClose={() => setShowForm(false)} />} */}
      <Hero />
      <Services />
      <AboutUs />
      <Portfolio />
      <Process />
      <Team />
      {/* <Testimonials /> */}
      <Blogs />
      <FAQs />
    </LightLayout>
  );
};

export default Home;
