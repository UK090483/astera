import { SLUG_PROJECTION } from "PageBuilder/constants";
import { localizedQueryFn } from "PageBuilder/helper/withLocalization";

export type linkResult = {
  internal?: string;
  href?: string;
};

const linkProjection: localizedQueryFn = (locale) => `
...(internal->{ 'internal':${SLUG_PROJECTION(locale)}}),
href,
`;

export { linkProjection };
