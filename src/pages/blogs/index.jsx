import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import BlogsList from "../../components/Blogs-List";
import Head from "next/head";

const Blogs = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <Head>
        <title>
          EG Living Blogs | Furniture Trends, Tips, and Innovations in UAE
        </title>
        <meta
          name="description"
          content="Stay updated with the latest trends in customized and luxury furniture through EG Living's blog. Learn about home and office solutions in the UAE."
        />
        <meta
          name="keywords"
          content="Best Customized Furniture in UAE, Luxury Furniture Shop, Modern Office Furniture UAE, Modular Kitchen Showroom in Dubai"
        />
        <meta
          property="og:title"
          content="EG Living Blogs | Furniture Trends, Tips, and Innovations in UAE"
        />
        <meta
          property="og:description"
          content="Stay updated with the latest trends in customized and luxury furniture through EG Living's blog. Learn about home and office solutions in the UAE."
        />
        <meta
          property="og:image"
          content="https://egliving.ae/og-image-blogs.jpg"
        />
        <meta property="og:url" content="https://egliving.ae/blogs" />
        <meta property="og:type" content="article" />
        <meta
          name="twitter:title"
          content="EG Living Blogs | Furniture Trends, Tips, and Innovations in UAE"
        />
        <meta
          name="twitter:description"
          content="Stay updated with the latest trends in customized and luxury furniture through EG Living's blog. Learn about home and office solutions in the UAE."
        />
        <meta
          name="twitter:image"
          content="https://egliving.ae/og-image-blogs.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <PageHeader
        title="Our Blogs"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "blogs", url: "/blogs" },
        ]}
        image={"/assets/img/blog/eg-living-customized-home-living.webp"}
      />
      <BlogsList />
    </MainLayout>
  );
};

export default Blogs;
