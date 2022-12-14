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
import Protected from "@components/Protected";

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
    <Protected>
      <style jsx global>{`
        html {
          font-family: ${lexend.style.fontFamily};
        }
        .garamondFont {
          font-family: ${ebGaramond.style.fontFamily};
        }
      `}</style>

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
    </Protected>
  );
}

export default App;
