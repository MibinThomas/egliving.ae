// src/pages/about/index.jsx

import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import AboutDetail from "../../components/AboutDetail";
import Skills from "../../components/Skills";
import AboutTeam from "../../components/About-Team";
import Head from "next/head";

export default function About() {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout>
      <Head>
        <title>
          About EG Living | Leading Customized Furniture Solutions in UAE
        </title>
        <meta
          name="description"
          content="Learn more about EG Living, the leader in customized furniture and modular office solutions in the UAE. Discover our mission, vision, and commitment to quality."
        />
        <meta
          name="keywords"
          content="Best Customized Furniture Dubai, Furniture Customization Dubai, Leading Modular Kitchen Design Company in Dubai, Best Customized furniture manufacture in UAE"
        />
        <meta
          property="og:title"
          content="About EG Living | Leading Customized Furniture Solutions in UAE"
        />
        <meta
          property="og:description"
          content="Learn more about EG Living, the leader in customized furniture and modular office solutions in the UAE. Discover our mission, vision, and commitment to quality."
        />
        <meta
          property="og:image"
          content="https://egliving.ae/og-image-about.jpg"
        />
        <meta property="og:url" content="https://egliving.ae/about" />
        <meta property="og:type" content="article" />
        <meta
          name="twitter:title"
          content="About EG Living | Leading Customized Furniture Solutions in UAE"
        />
        <meta
          name="twitter:description"
          content="Learn more about EG Living, the leader in customized furniture and modular office solutions in the UAE. Discover our mission, vision, and commitment to quality."
        />
        <meta
          name="twitter:image"
          content="https://egliving.ae/og-image-about.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <PageHeader
        title="About Us"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "about us", url: "/about" },
        ]}
      />
      <AboutDetail />
      <AboutTeam />
      <Skills />
    </MainLayout>
  );
}
