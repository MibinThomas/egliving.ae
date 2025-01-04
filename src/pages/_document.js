// src/pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const locale = ctx?.req?.locale || "en";
    const canonical = ctx.req
      ? `${ctx.req.headers["x-forwarded-proto"] || "http"}://${
          ctx.req.headers.host
        }${ctx.req.url}`
      : "";

    return {
      ...initialProps,
      locale,
      canonical,
    };
  }

  render() {
    const { canonical, locale } = this.props;
    return (
      <Html lang={locale}>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="index, follow" />
          <link
            rel="manifest"
            href="/manifest.json"
            crossOrigin="use-credentials"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Teko:300,400,500,600,700&display=swap"
            rel="stylesheet"
          />

          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/assets/favicon/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/assets/favicon/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/assets/favicon/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/assets/favicon/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/assets/favicon/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/assets/favicon/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/assets/favicon/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/assets/favicon/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/favicon/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/assets/favicon/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/assets/favicon/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />

          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="keywords"
            content="EG Living | Custom Furniture Solutions UAE | Modular Furniture Design | Bespoke Furniture Dubai | Modular Living Spaces UAE | Luxury Custom Furniture UAE | Sustainable Furniture Dubai | Modular Office Solutions UAE | High-End Custom Furniture | Tailored Furniture Designs | Modern Modular Kitchens UAE | Innovative Living Spaces Dubai | Sustainable Home Furniture UAE | Custom Modular Architecture Dubai | Flexible Space Design UAE | Custom Luxury Furniture Online UAE | Expert Furniture Craftsmanship UAE"
          />
          <meta
            name="description"
            content="Transform your space with EG Living's custom furniture and modular design solutions. We specialize in luxury, sustainability, and expert craftsmanship to create bespoke, functional spaces that reflect your style and vision. Over 20 years of industry expertise."
          />
          <meta name="author" content="WebEyeCraft Technologies" />
          <meta name="publisher" content="EG Living" />
          <meta
            name="msapplication-TileImage"
            content="/assets/favicon/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#ffffff" />

          <meta name="robots" content="index, follow" />
          <meta
            property="og:title"
            content="EG Living - Custom Furniture & Modular Design Experts in UAE"
          />
          <meta
            property="og:description"
            content="Discover EG Living: Transforming spaces with bespoke custom furniture and modular design solutions. Elevating style, functionality, and sustainability with over 20 years of industry expertise."
          />
          <meta
            property="og:image"
            content="/assets/favicon/android-icon-192x192.png"
          />
          <meta property="og:url" content="https://egliving.ae" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="EG Living - Custom Furniture & Modular Design Experts"
          />
          <meta
            name="twitter:description"
            content="Transform your space with EG Living's custom furniture and modular design solutions. Expert craftsmanship, innovation, and sustainability define our approach to elevating your living and working spaces."
          />
          <meta
            name="twitter:image"
            content="/assets/favicon/android-icon-192x192.png"
          />
          <meta name="twitter:site" content="@egliving" />

          <link rel="canonical" href={canonical} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
