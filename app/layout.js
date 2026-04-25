import localFont from "next/font/local";
import { personSchema, websiteSchema } from "../src/utils/structuredData";
import Providers from "./Providers";
import "../src/styles/globals.css";
import "../src/styles/social-icons.css";

const montserrat = localFont({
  src: "../public/fonts/Montserrat-Regular.ttf",
  variable: "--font-montserrat",
  display: "swap",
});

const googleSans = localFont({
  src: [
    { path: "../public/fonts/GoogleSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/GoogleSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/GoogleSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/GoogleSans-Italic.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/GoogleSans-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../public/fonts/GoogleSans-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-google-sans",
  display: "swap",
});

const agustina = localFont({
  src: "../public/fonts/Agustina.woff",
  variable: "--font-agustina",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://aryankr.in"),
  title: "Aryan Kumar | Software Engineer | GEN AI Developer | Full-Stack Developer",
  description:
    "Official portfolio of Aryan Kumar, Software Engineer specializing in GEN AI, DevOps, Azure, system architecture, and full-stack development. Explore projects, resume, and contact.",
  keywords:
    "aryan kumar, aryan kumar developer, aryan kumar github, aryan kumar portfolio, aryan kumar gen ai developer, aryan kumar devops engineer, aryan kumar software engineer, full stack developer, software engineer portfolio, aryan kumar azure, aryan kumar npm",
  authors: [{ name: "Aryan Kumar" }],
  creator: "aryan kumar",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: [
      "qGQzl78dYX4EIXhyvMpsobnn5Z1dvz1lv5Gq45smSCE",
      "kKoA_bu1dIXSUlTsCLD335y9QhOM3fHqM8cBO7J22Ak",
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aryankr.in",
    siteName: "Aryan Kumar Portfolio",
    title: "Aryan Kumar | Software Engineer | GEN AI Developer | Full-Stack Developer",
    description:
      "Official portfolio of Aryan Kumar, Software Engineer specializing in GEN AI, DevOps, Azure, system architecture, and full-stack development.",
    images: [
      {
        url: "/seo/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Aryan Kumar — Software Engineer & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@aryanjsx",
    site: "@aryanjsx",
  },
  other: {
    "google-adsense-account": "ca-pub-3385842186855848",
    "p:domain_verify": "418e0f35dde54082f7dbadfd645efa36",
    "msapplication-TileColor": "#000000",
    "msapplication-TileImage": "/logo.png",
  },
};

export default function RootLayout({ children }) {

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} ${googleSans.variable} ${agustina.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FC0PX75F4B"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-FC0PX75F4B');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t);document.documentElement.style.colorScheme=t}else{document.documentElement.setAttribute("data-theme","dark");document.documentElement.style.colorScheme="dark"}}catch(e){document.documentElement.setAttribute("data-theme","dark");document.documentElement.style.colorScheme="dark"}})()`,
          }}
        />
        <link rel="me" href="https://github.com/aryanjsx" />
        <link rel="me" href="https://www.linkedin.com/in/aryanjsx" />
        <link rel="me" href="https://x.com/aryanjsx" />
        <link rel="me" href="https://aryanjsx.medium.com" />
        <link rel="me" href="https://dev.to/aryanjsx" />
        <link rel="me" href="https://www.npmjs.com/~aryanjsx" />
        <link rel="me" href="https://app.daily.dev/aryanjsx" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.github.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.github.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <noscript>
          <div style={{ padding: "40px", textAlign: "center", fontFamily: "sans-serif" }}>
            <h1>Aryan Kumar</h1>
            <p>
              Software Engineer &amp; GEN AI Developer. Aryan Kumar — portfolio,
              projects, resume and contact.
            </p>
            <p>
              Please enable JavaScript to view this portfolio at{" "}
              <a href="https://aryankr.in">aryankr.in</a>.
            </p>
          </div>
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
