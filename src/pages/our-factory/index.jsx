import React from "react";
import MainLayout from "../../layouts/main";
import FactoryHeader from "../../components/Factory-Header";
import FactoryDetails from "../../components/Our-Factory";
import Head from "next/head";

const OurFactory = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <Head>
        <title>
          EG Living Factory | Modern Furniture Manufacturing in the UAE
        </title>
        <meta
          name="description"
          content="Discover how EG Living’s state-of-the-art manufacturing facility produces top-quality, customized furniture for the UAE market."
        />
        <meta
          name="keywords"
          content="Custom Furniture Dubai, Furniture Store UAE, Best Furniture Shop UAE, High-End Furniture UAE"
        />
        <meta
          property="og:title"
          content="EG Living Factory | Modern Furniture Manufacturing in the UAE"
        />
        <meta
          property="og:description"
          content="Discover how EG Living’s state-of-the-art manufacturing facility produces top-quality, customized furniture for the UAE market."
        />
        <meta
          property="og:image"
          content="https://egliving.ae/og-image-factory.jpg"
        />
        <meta property="og:url" content="https://egliving.ae/our-factory" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="EG Living Factory | Modern Furniture Manufacturing in the UAE"
        />
        <meta
          name="twitter:description"
          content="Discover how EG Living’s state-of-the-art manufacturing facility produces top-quality, customized furniture for the UAE market."
        />
        <meta
          name="twitter:image"
          content="https://egliving.ae/og-image-factory.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <FactoryHeader
        title={{
          first: "Crafting Excellence,",
          second: "Where Innovation Meets Craftsmanship",
        }}
        content="Discover the heart of EG Living — our factory, where cutting-edge technology and skilled craftsmanship come together to create bespoke furniture tailored to your needs."
      />

      <FactoryDetails />
    </MainLayout>
  );
};

export default OurFactory;
