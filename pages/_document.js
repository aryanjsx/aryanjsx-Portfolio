import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { personSchema, websiteSchema } from "../src/utils/structuredData";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" href="/logo.png" />
          <link rel="apple-touch-icon" href="/logo.png" />
          <meta name="author" content="Aryan Kumar (aryanjsx)" />
          <meta name="creator" content="aryanjsx" />
          <link rel="me" href="https://github.com/aryanjsx" />
          <link rel="me" href="https://www.linkedin.com/in/aryanjsx" />
          <link rel="me" href="https://x.com/aryanjsx" />
          <link rel="me" href="https://aryanjsx.medium.com" />
          <link rel="me" href="https://dev.to/aryanjsx" />
          <link rel="me" href="https://www.npmjs.com/~aryanjsx" />
          <link rel="me" href="https://app.daily.dev/aryanjsx" />
          <meta
            name="google-adsense-account"
            content="ca-pub-3385842186855848"
          />
          <meta
            name="p:domain_verify"
            content="418e0f35dde54082f7dbadfd645efa36"
          />
          <meta
            name="google-site-verification"
            content="qGQzl78dYX4EIXhyvMpsobnn5Z1dvz1lv5Gq45smSCE"
          />
          <meta
            name="google-site-verification"
            content="kKoA_bu1dIXSUlTsCLD335y9QhOM3fHqM8cBO7J22Ak"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta
            name="msapplication-TileImage"
            content="/logo.png"
          />
          <meta name="theme-color" content="#000000" />
          <link
            rel="preconnect"
            href="https://code.iconify.design"
            crossOrigin="anonymous"
          />
          <link
            rel="dns-prefetch"
            href="https://code.iconify.design"
          />
          <link
            rel="preconnect"
            href="https://cdnjs.cloudflare.com"
            crossOrigin="anonymous"
          />
          <link
            rel="dns-prefetch"
            href="https://cdnjs.cloudflare.com"
          />
          <link
            rel="preconnect"
            href="https://www.googletagmanager.com"
            crossOrigin="anonymous"
          />
          <link
            rel="preconnect"
            href="https://api.github.com"
            crossOrigin="anonymous"
          />
          <link
            rel="dns-prefetch"
            href="https://api.github.com"
          />
{/* Iconify and anime.js loaded via next/script in _app.js */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          />
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-TDZT2FJN"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
          <noscript>
            <div
              style={{
                padding: "40px",
                textAlign: "center",
                fontFamily: "sans-serif",
              }}
            >
              <h1>Aryan Kumar (AryanJSX)</h1>
              <p>
                Software Engineer &amp; Full Stack Developer. Aryan Kumar aka
                AryanJSX — portfolio, projects, resume and contact.
              </p>
              <p>
                Please enable JavaScript to view this portfolio at{" "}
                <a href="https://aryankr.in">aryankr.in</a>.
              </p>
            </div>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
