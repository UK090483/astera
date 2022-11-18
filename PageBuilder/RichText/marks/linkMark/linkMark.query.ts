import { SLUG_PROJECTION } from "PageBuilder/constants";
import { localizedQueryFn } from "PageBuilder/helper/withLocalization";
import {
  linkProjection,
  linkResult,
} from "PageBuilder/Objects/link/link.query";

export type linkMarkResult = {
  _type: "linkMark";
  asButton: boolean;
} & linkResult;

const linkMarkProjection: localizedQueryFn = (locale) => `
_type,
${linkProjection(locale)}
asButton,
`;

export { linkMarkProjection };
