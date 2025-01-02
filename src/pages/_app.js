//  src/pages/_app.js

import React from "react";
import Script from "next/script";
import Head from "next/head";
import LoadingScreen from "../components/Loading-Screen/loading-screen";
import "../styles/globals.css";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/scrollToTop";
import { Lenis, useLenis } from "lenis/react";
import Chat from "../components/Chat";
import { I18nextProvider } from "react-i18next";
import i18next from "../i18n";

function MyApp({ Component, pageProps }) {
  useLenis((lenis) => {
    lenis.on("scroll", () => {});
  });

  return (
    <I18nextProvider i18n={i18next}>
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

      <Script id="wow" src="/assets/js/wow.min.js"></Script>
      <Script
        id="splitting"
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      ></Script>
      <Script
        id="simpleParallax"
        src="/assets/js/simpleParallax.min.js"
      ></Script>
      <Script id="isotope" src="/assets/js/isotope.pkgd.min.js"></Script>
      <Script src="/assets/js/main.js" id="init" strategy="lazyOnload"></Script>
    </I18nextProvider>
  );
}

export default MyApp;
