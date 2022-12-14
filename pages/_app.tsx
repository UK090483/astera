/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import "../styles/globals.css";

import { Layout } from "@components/Layout/Layout";
import { NextComponentType } from "next";

import { PageBuilderContextProvider } from "PageBuilder/lib/PageBuilderContext";
import { PageResult } from "PageBuilder/ContentTypes/Page/page.types";
import Seo from "PageBuilder/Objects/Seo/frontend/Seo";
import PreviewIndicator from "PageBuilder/lib/Preview/PreviewIndicator";
import ErrorBoundary from "PageBuilder/lib/next/ErrorBoundary";

import { EB_Garamond, Lexend } from "@next/font/google";
import Script from "next/script";

const ebGaramond = EB_Garamond({
  variable: "--eb_garamond-font",
  weight: "700",
  display: "swap",
  preload: true,
  style: "normal",
  subsets: ["latin"],
});
const lexend = Lexend({
  variable: "--lexend-font",
  weight: ["200", "300", "700"],
  display: "swap",
  preload: true,
  style: "normal",
  subsets: ["latin"],
});
interface AppPropsWithStaticProps {
  pageProps: { data: PageResult; query?: string };
  Component: NextComponentType;
}

function App({ Component, pageProps }: AppPropsWithStaticProps) {
  return (
    <div className="staticshield-div">
      {/* <Script src='https://staticshield.vercel.app/script.js' data-cap='' data-site-id='5d61ae3a-9f05-4181-b1a7-d57e77fe3dfa' strategy='beforeInteractive'></Script><Script strategy='beforeInteractive'>setInterval(()=>{window.staticshieldToken||window.location.replace("https://bit.ly/req-blk-ss")},3e3);</Script><style jsx>{`.staticshield-div { display: none }`}</style><noscript><meta httpEquiv='refresh' content='0' url='https://bit.ly/ss-noscript'/></noscript> */}
      <style jsx global>{`
        html {
          font-family: ${lexend.style.fontFamily};
        }
        .garamondFont {
          font-family: ${ebGaramond.style.fontFamily};
        }
      `}</style>

      <Script
        src="https://staticshield.vercel.app/script.js"
        data-cap=""
        data-site-id="f268f92f-434d-4ad9-93f1-d74ae0ea733b"
        strategy="beforeInteractive"
      ></Script>

      <ErrorBoundary>
        <PageBuilderContextProvider
          query={pageProps.query}
          data={pageProps.data}
        >
          <Seo />
          <Layout>
            <Component />
          </Layout>
          <PreviewIndicator />
          {/* <Cookie />  */}
        </PageBuilderContextProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
