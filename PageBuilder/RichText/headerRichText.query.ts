import { Block } from "../types";
import { localizedQueryFn } from "../helper/withLocalization";
import { linkMarkProjection } from "./marks/linkMark/linkMark.query";

const markDefs: localizedQueryFn = (locale) => `
markDefs[]{
   ...,
   _type == 'linkMark' =>{
   ${linkMarkProjection(locale)}
   }
  },
`;

export const headerRichTextQuery: localizedQueryFn = (locale) => `
...,
_type == 'block'=> {
    ...,
     ${markDefs(locale)}
  },
`;

export type headerRichTextQueryResult = Block[];
