// src/pages/_app.js

import React from "react";
import Script from "next/script";
import Head from "next/head";
import LoadingScreen from "../components/Loading-Screen/loading-screen";
import "../styles/globals.css";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/scrollToTop";
import { Lenis, useLenis } from "lenis/react";
import Chat from "../components/Chat";

function MyApp({ Component, pageProps }) {
  useLenis((lenis) => {
    lenis.on("scroll", () => {});
  });

  return (
    <>
      <Head>
        <title>
          EG Living - Custom Furniture & Modular Design Experts in UAE
        </title>
      </Head>
      <Lenis
        root
        options={{
          smooth: true,
          duration: 1,
          easing: (t) => 1 - Math.pow(1 - t, 3),
        }}
      >
        <Cursor />
        <LoadingScreen />
        <Component {...pageProps} />
        <Chat />
        <ScrollToTop />
      </Lenis>

      <Script src="/assets/js/wow.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      ></Script>
      <Script src="/assets/js/simpleParallax.min.js"></Script>
      <Script src="/assets/js/isotope.pkgd.min.js"></Script>
      <Script strategy="lazyOnload" src="/assets/js/main.js" id="init"></Script>
    </>
  );
}

export default MyApp;
