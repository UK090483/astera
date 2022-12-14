/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from "next/script";
import * as React from "react";

interface IProtectedProps {}

const isDev = process.env.NODE_ENV === "development";

const Protected: React.FunctionComponent<IProtectedProps> = ({ children }) => {
  if (isDev) return <>{children}</>;

  return (
    <div className="staticshield-div">
      <Script
        src="https://staticshield.vercel.app/script.js"
        data-cap=""
        data-site-id="5d61ae3a-9f05-4181-b1a7-d57e77fe3dfa"
        strategy="beforeInteractive"
      ></Script>
      <style jsx>{`
        .staticshield-div {
          display: none;
        }
      `}</style>
      <noscript>
        <meta
          httpEquiv="refresh"
          content="0; url=https://staticshield.vercel.app/errors/noscript"
        />
      </noscript>
      {children}
    </div>
  );
};

export default Protected;
