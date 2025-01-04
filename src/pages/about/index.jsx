// src/pages/about/index.jsx

import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import AboutDetail from "../../components/AboutDetail";
import Skills from "../../components/Skills";
import AboutTeam from "../../components/About-Team";

export default function About() {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout>
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
