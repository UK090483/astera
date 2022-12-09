import { Block } from "../types";
import { localizedQueryFn } from "../helper/withLocalization";
import { embedQuery, embedQueryResult } from "./Plugs/EmbedHTML/embed.query";
import { videoPlugQuery, videoPlugResult } from "./Plugs/videoPlug/video.query";
import {
  imagePlugProjection,
  imagePlugResult,
} from "./Plugs/ImagePlug/ImagePlug.query";
import { linkMarkProjection } from "./marks/linkMark/linkMark.query";
import { listProjection } from "PageBuilder/Components/Listing/listing.query";
import { dealsPlugQuery } from "./Plugs/Deals/deals.query";
import { downloadQuery } from "./Plugs/Download/download.query";
const markDefs: localizedQueryFn = (locale) => `
markDefs[]{
   ...,
   _type == 'linkMark' =>{
   ${linkMarkProjection(locale)}
   }
  },
`;

export const defaultRichTextQuery: localizedQueryFn = (locale) => `
...,
_type == 'block'=> {
  ...,
   ${markDefs(locale)}
},
${embedQuery}
${downloadQuery}
${videoPlugQuery}
${imagePlugProjection}
${dealsPlugQuery(locale)}
`;

export type defaultRichTextQueryResult = (
  | Block
  | videoPlugResult
  | embedQueryResult
  | imagePlugResult
)[];
