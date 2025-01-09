import React from "react";
import MainLayout from "../../layouts/main";
import FaqHeader from "../../components/Faq-Header";
import FaqsDetailed from "../../components/Faqs-Detailed";
import Head from "next/head";

const AllFaqs = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <Head>
        <title>
          FAQ | EG Living | Your Custom Furniture and Design Questions Answered
        </title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about EG Living’s customized furniture and design solutions in the UAE."
        />
        <meta
          name="keywords"
          content="Furniture Customization Dubai, Furniture FAQ, Best Interior Design Company in Dubai, Modern Office Furniture UAE"
        />
        <meta
          property="og:title"
          content="FAQ | EG Living | Your Custom Furniture and Design Questions Answered"
        />
        <meta
          property="og:description"
          content="Find answers to frequently asked questions about EG Living’s customized furniture and design solutions in the UAE."
        />
        <meta
          property="og:image"
          content="https://egliving.ae/og-image-faq.jpg"
        />
        <meta
          property="og:url"
          content="https://egliving.ae/frequently-asked-questions"
        />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="FAQ | EG Living | Your Custom Furniture and Design Questions Answered"
        />
        <meta
          name="twitter:description"
          content="Find answers to frequently asked questions about EG Living’s customized furniture and design solutions in the UAE."
        />
        <meta
          name="twitter:image"
          content="https://egliving.ae/og-image-faq.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <FaqHeader
        title={{
          first: "Have Questions?",
          second: "Find Your Answers Here",
        }}
        content="Explore our Frequently Asked Questions to get detailed insights about our services, processes, and solutions tailored to your needs."
      />
      <FaqsDetailed />
    </MainLayout>
  );
};

export default AllFaqs;
