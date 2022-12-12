import * as React from "react";

import Image from "next/image";
import Image404 from "../public/images/404.png";
import Section from "@components/Section/Section";
import { sanityClient } from "@lib/SanityService/sanity.server";
import { GetStaticProps } from "next";
import { footerQuery } from "@components/Layout/Footer/Footer.query";
import navigationQuery from "PageBuilder/Navigation/navigation.query";
import { IMAG_PROJECTION } from "PageBuilder/constants";
import BodyParser from "PageBuilder/lib/BodyParser";
import HeroBlock from "PageBuilder/Components/Hero/frontend/HeroBlock";
import Link from "next/link";
import useButtonStyle from "@components/Button/useButtonStyle";
import { useRouter } from "next/router";
import useTranslation from "@hooks/useTranslation";

const Page404: React.FunctionComponent = () => {
  const buttonStyle = useButtonStyle();

  const { notFound, sorry, home, text } = useTranslation({
    notFound: { default: "SEITE NICHT GEFUNDEN!", en: "PAGE NOT FOUND!" },
    sorry: {
      default:
        "Es tut uns leid, aber wir können die gesuchte Seite nicht finden.",
      en: "Sorry, we can’t seem to find the page you’re looking for.",
    },
    text: {
      default:
        "Möglicherweise ist in der eingegebenen URL ein Schreibfehler enthalten, oder die gesuchte Seite existiert nicht mehr.",
      en: "There may be a misspelling in the URL entered, or the page you are looking for may no longer exist.",
    },
    home: {
      default: "Zur Startseite",
      en: "Back to Home",
    },
  });

  return (
    <>
      <BodyParser
        components={{
          hero: {
            component: HeroBlock,
          },
        }}
      />
      <Section width="s" topSpace="l" bottomSpace="xl">
        <div className="header1  text-right pr-16 ">OOOOPS!</div>
        <Image
          width={700}
          src={Image404}
          className="mx-auto"
          alt={"404 in written text"}
        />

        <h1 className="header1 pt-8">{notFound}</h1>
        <p>{sorry}</p>
        <p>{text}</p>

        <Link className={"mt-12 " + buttonStyle} href="/">
          {home}
        </Link>
      </Section>
    </>
  );
};

const Page404Query = (locale?: string) => `
{
'body':[{'_key':'404', '_type':'hero','image': *[_id=='baseConfig'][0].defaultHero{${IMAG_PROJECTION}}}],
${navigationQuery(locale)}
${footerQuery(locale)}
}
`;

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await sanityClient.fetch(Page404Query(context.locale));
  return { props: { data: res }, revalidate: 1 };
};

export default Page404;
