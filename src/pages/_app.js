// src/pages/_app.js

import React, { useEffect } from "react";
import Script from "next/script";
import LoadingScreen from "../components/Loading-Screen/loading-screen";
import "../styles/globals.css";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/scrollToTop";
import { Lenis, useLenis } from "lenis/react";
import Chat from "../components/Chat";
import { useRouter } from "next/router";

const GA_TRACKING_ID = "G-LD7MZKF2R2";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useLenis((lenis) => {
    lenis.on("scroll", () => {});
  });

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (window.gtag) {
        window.gtag("config", GA_TRACKING_ID, {
          page_path: url,
        });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
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

      {/* Google Analytics Scripts */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* Other scripts */}
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
