import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

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
          <link rel="icon" href="/favicon.ico" />
          <meta name="author" content="aryanjsx" />
          <meta name="creator" content="aryanjsx" />
          <link rel="me" href="https://x.com/aryanjsx" />
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
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#000000" />
          <link
            rel="preconnect"
            href="https://code.iconify.design"
            crossOrigin="anonymous"
          />
          <link
            rel="preconnect"
            href="https://cdnjs.cloudflare.com"
            crossOrigin="anonymous"
          />
          <link
            rel="preconnect"
            href="https://www.googletagmanager.com"
            crossOrigin="anonymous"
          />
{/* Iconify and anime.js loaded via next/script in _app.js */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://aryankr.in/#person",
                name: "Aryan Kumar",
                alternateName: ["aryanjsx", "AryanJSX", "Aryan Kumar"],
                url: "https://aryankr.in",
                identifier: "aryanjsx",
                jobTitle: "Software Engineer",
                description: "Software Engineer",
                sameAs: [
                  "https://github.com/aryanjsx",
                  "https://x.com/aryanjsx",
                  "https://instagram.com/aryanjsx",
                  "https://facebook.com/aryanjsx",
                  "https://pinterest.com/aryanjsx",
                  "https://leetcode.com/aryanjsx",
                  "https://www.hackerrank.com/aryanjsx",
                  "https://medium.com/@aryanjsx",
                  "https://dev.to/aryanjsx",
                  "https://www.npmjs.com/aryanjsx",
                  "https://hub.docker.com/u/aryanjsx",
                  "https://linkedin.com/in/aryanjsx",
                ],
                image: {
                  "@type": "ImageObject",
                  url: "https://aryankr.in/logo512.png",
                  contentUrl: "https://aryankr.in/logo512.png",
                },
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://aryankr.in/#website",
                name: "Aryan Kumar Portfolio",
                alternateName: "Aryan Kumar Portfolio",
                url: "https://aryankr.in",
                description:
                  "Personal portfolio and profile page for Aryan Kumar — Software Engineer.",
                publisher: { "@id": "https://aryankr.in/#person" },
                author: { "@id": "https://aryankr.in/#person" },
                inLanguage: "en-US",
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate:
                      "https://aryankr.in/?q={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
              }),
            }}
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
