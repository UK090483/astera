import BodyParser from "./lib/BodyParser";
import BlockFactory from "./lib/BlockFactory";
import { SPBOptions, SPBResult } from "./types";
import { fetchStaticProps } from "./lib/fetchStaticProps";
import fetchStaticPaths from "./lib/fetchStaticPath/fetchStaticPath";
import { getSanityClient } from "@lib/SanityService/sanity.server";
import { env } from "process";

function SPB<P extends { [k: string]: any } = {}>({
  revalidate,
  components,
  client,
  locales,
  getQuery,
  query,
}: SPBOptions): SPBResult<P> {
  const bf = BlockFactory;
  bf.registerComponents(components);

  return {
    blockFactory: bf,
    PageComponent: (props) => {
      const { data } = props;

      return <BodyParser blockFactory={bf} content={data?.content || []} />;
    },
    getStaticPaths: async () => {
      return await fetchStaticPaths({ client, doc: "page", locales });
    },
    //@ts-ignore
    getStaticProps: async (props) => {
      const { params, preview, locale } = props;

      return await fetchStaticProps<P>({
        locale,
        revalidate,
        params,
        client: getSanityClient({
          active: !!preview,
          token: process.env.SANITY_API_TOKEN,
        }),
        query: `${bf.getRootQuery({ locale })}, ${
          getQuery ? getQuery(props) : query || ""
        }`,
        locales,
        preview,
      });
    },
  };
}

export default SPB;