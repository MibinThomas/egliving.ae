import React, { useState, useEffect } from "react";
import Head from "next/head";
import AboutUs2 from "../../components/About-Us2";
import Services2 from "../../components/Services2";
import Portfolio2 from "../../components/Portfolio2";
import Testimonials1 from "../../components/Testimonials1";
import Team1 from "../../components/Team1";
import Blogs2 from "../../components/Blogs2";
import IntroWithVertical from "../../components/Intro-with-vertical";
import Process from "../../components/Process";
import Brands from "../../components/Brands";
import LightLayout from "../../layouts/light";
import Form from "../../components/Form";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    document.querySelector("body").classList.add("homepage");

    const timer = setTimeout(() => {
      setShowForm(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <link rel="canonical" href="https://egliving.ae" />
      </Head>
      <LightLayout>
        {/* {showForm && <Form onClose={() => setShowForm(false)} />} */}

        <IntroWithVertical />
        <Services2 />
        <AboutUs2 />
        <Portfolio2 />
        <Process />
        <Team1 />
        {/* <Brands /> */}
        <Blogs2 />
      </LightLayout>
    </>
  );
};

export default Home;
