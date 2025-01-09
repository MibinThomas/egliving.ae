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
import Head from "next/head";

const Contact = () => {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      document.querySelector("body").classList.add("index3");
    }
  }, []);

  return (
    <MainLayout>
      <Head>
        <title>
          Contact EG Living | Get in Touch for Custom Furniture Solutions in UAE
        </title>
        <meta
          name="description"
          content="Reach out to EG Living for your custom furniture needs in the UAE. Our team is here to help with your home or office furniture projects."
        />
        <meta
          name="keywords"
          content="Furniture Store UAE, Contact Custom Furniture Dubai, Furniture Shop UAE, Best Furniture in Dubai UAE"
        />
        <meta
          property="og:title"
          content="Contact EG Living | Get in Touch for Custom Furniture Solutions in UAE"
        />
        <meta
          property="og:description"
          content="Reach out to EG Living for your custom furniture needs in the UAE. Our team is here to help with your home or office furniture projects."
        />
        <meta
          property="og:image"
          content="https://egliving.ae/og-image-contact.jpg"
        />
        <meta property="og:url" content="https://egliving.ae/contact" />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:title"
          content="Contact EG Living | Get in Touch for Custom Furniture Solutions in UAE"
        />
        <meta
          name="twitter:description"
          content="Reach out to EG Living for your custom furniture needs in the UAE. Our team is here to help with your home or office furniture projects."
        />
        <meta
          name="twitter:image"
          content="https://egliving.ae/og-image-contact.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
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
