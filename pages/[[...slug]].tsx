import BodyParser from "PageBuilder/lib/BodyParser";
import GalleryPlug from "PageBuilder/Components/ImageGallery/frontend/ImageGalleryComponent";
import SectionBlock from "PageBuilder/Components/Section/frontend/SectionBlock";
import HeroBlock from "PageBuilder/Components/Hero/frontend/HeroBlock";
import ListingBlock from "PageBuilder/Components/Listing/frontend/ListingBlock";

import {
  getSanityClient,
  sanityClient,
} from "@lib/SanityService/sanity.server";

import type { GetStaticPaths, GetStaticProps } from "next";

import fetchStaticPath from "PageBuilder/lib/next/fetchStaticPath";
import fetchStaticProps from "PageBuilder/lib/next/fetchStaticProps";

import { pageQuery } from "PageBuilder/ContentTypes/Page/page.query";
import { PersonSection } from "PageBuilder/Components/Person/frontend/PersonSection";
import { personQuery } from "PageBuilder/ContentTypes/Person/person.query";
import { NewsSection } from "PageBuilder/Components/News/frontend/NewsSection";
import { newsQuery } from "PageBuilder/ContentTypes/news/news.query";

export type PageResult = { content?: any };

const Page = () => {
  return (
    <>
      <BodyParser
        components={{
          hero: {
            component: HeroBlock,
          },
          section: {
            component: SectionBlock,
          },
          listing: {
            component: ListingBlock,
          },
          imageGalleryPlug: {
            component: GalleryPlug,
          },
          personSection: {
            component: PersonSection,
          },
          newsSection: {
            component: NewsSection,
          },
        }}
      />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  return await fetchStaticPath({
    context,
    sanityClient,
    items: [{ name: "page" }],
  });
};

export const getStaticProps: GetStaticProps = async (context) => {
  return await fetchStaticProps({
    context,
    getSanityClient,
    items: {
      page: { query: pageQuery },
      news: { query: newsQuery },
      person: { query: personQuery },
    },
  });
};

export default Page;
