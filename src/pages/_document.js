import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          

          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Teko:300,400,500,600,700&display=swap"
            rel="stylesheet"
          />

          <link rel="shortcut icon" href="/favicon.ico" />
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
            content="EG Living | Modular Design Experts | Office Furniture Solutions | Commercial Design Trends | Innovative Space Solutions | Best Modular Living Ideas | Functional & Stylish Living Spaces | Luxury Home Furniture Online | Luxury Home Furniture UAE | Best Furniture Shop UAE | High End Furniture UAE | Modular Conference Table | Office Conference Table | Modern Conference Table | Conference Table Chairs | Modular Kitchen Design Company in UAE | Modular Kitchen Near Me | Modular Kitchen Accessories Shop Near Me |  Modular Kitchen Shop Near Me​ | Best Modular Kitchen Near Me​"
          />
          <meta
            name="description"
            content="Discover EG Living: Innovative office solutions, versatile commercial designs, and superior modular living. Elevate your space with over 20 years of industry expertise, redefining style and functionality."
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
            content="EG Living - Office Furniture, Workstations in Dubai"
          />
          <meta
            property="og:description"
            content="Discover EG Living: Innovative office solutions, versatile commercial designs, and superior modular living. Elevate your space with over 20 years of industry expertise, redefining style and functionality."
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
            content="EG Living - Office Furniture, Workstations in Dubai"
          />
          <meta
            name="twitter:description"
            content="Discover EG Living: Innovative office solutions, versatile commercial designs, and superior modular living. Elevate your space with over 20 years of industry expertise, redefining style and functionality."
          />
          <meta
            name="twitter:image"
            content="/assets/favicon/android-icon-192x192.png"
          />
          <meta name="twitter:site" content="" />
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
