import React from "react";
import MainLayout from "../../layouts/main";
import FactoryHeader from "../../components/Factory-Header";
import FactoryDetails from "../../components/Our-Factory";

const OurFactory = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
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
