import React from "react";
import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { WorkTwoColumn } from "../../components/Work-Two-Column";

const Work1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: "Crafting Inspiring You Dream spaces",
          second: "Where Design Meets Functionality",
        }}
        content="EG Living specializes in modern, functional custom furniture that enhance productivity and creativity. Our high-quality, ergonomic solutions are designed to fit businesses' needs."
      />
      <WorkTwoColumn />
    </MainLayout>
  );
};

export default Work1;
