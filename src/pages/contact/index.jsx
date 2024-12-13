import React from "react";
import dynamic from "next/dynamic";

const PageHeader = dynamic(() => import("../../components/Page-header"), {
  ssr: false,
});
const ContactInfo = dynamic(() => import("../../components/Contact-info"), {
  ssr: false,
});
const ContactWithMap = dynamic(
  () => import("../../components/Contact-with-map"),
  { ssr: false }
);
import MainLayout from "../../layouts/main";

const Contact = () => {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      document.querySelector("body").classList.add("index3");
    }
  }, []);

  return (
    <MainLayout>
      <PageHeader
        title="Contact Us"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "contact us", url: "/contact" },
        ]}
        image="/assets/img/contact-eg-living-office-furniture.jpg"
      />
      <section className="contact">
        <ContactInfo />
        <ContactWithMap />
      </section>
    </MainLayout>
  );
};

export default Contact;
