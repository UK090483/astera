import React from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import { usePageBuilderContext } from "../../../lib/PageBuilderContext";

const metaImageParams = "?w=1200&h=630&bg=fff&fit=fillmax";
const titlePrefix = "ASTERA | ";

const hostName = "https://www.astera-legal.com";
const ogImageEndpoint = "api/og";

const Seo: React.FC = (props) => {
  const { pathname, asPath } = useRouter();

  const { data } = usePageBuilderContext();

  const seo = data?.seo;

  const imageUrl = seo?.shareGraphicUrl
    ? seo?.shareGraphicUrl + metaImageParams
    : "";

  if (!seo) return null;
  const { metaTitle, metaDesc, shareDesc } = seo;

  const canonical = (hostName + asPath).split("?")[0];

  const is404 = pathname === "/404";
  const title = is404 ? titlePrefix + "404" : titlePrefix + metaTitle;

  return (
    <NextSeo
      nofollow={true}
      noindex={true}
      title={title}
      description={metaDesc || ""}
      canonical={canonical}
      twitter={{
        cardType: "summary",
      }}
      openGraph={{
        url: canonical,
        title: title,
        description: shareDesc || "",
        type: "page",
        images: [
          {
            url: imageUrl,

            width: 1200,
            height: 630,
          },
        ],
        site_name: "Astera",
      }}
    />
  );
};
export default Seo;
