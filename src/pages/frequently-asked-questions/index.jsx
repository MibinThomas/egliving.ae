import React from "react";
import MainLayout from "../../layouts/main";
import FaqHeader from "../../components/Faq-Header";
import FaqsDetailed from "../../components/Faqs-Detailed";

const AllFaqs = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
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
