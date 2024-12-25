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
import Blogs from "../../components/Blogs";

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
      {/* {showForm && <Form onClose={() => setShowForm(false)} />} */}
      <Hero />
      <Services />
      <AboutUs />
      <Portfolio />
      <Process />
      <Team />
      <Blogs />
    </LightLayout>
  );
};

export default Home;
