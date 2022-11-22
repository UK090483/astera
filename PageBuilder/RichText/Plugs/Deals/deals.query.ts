import {
  localizedQueryFn,
  localizeValue,
} from "PageBuilder/helper/withLocalization";
import { SLUG_PROJECTION } from "../../../constants";

export const dealsPlugQuery: localizedQueryFn = (locale) => `
_type == 'dealsPlug'=>{
    _type,
    _key,
     'items': *[ _type == 'news' && category in ['privateEquityDeal','financeDeal'] ][] | order(startDate desc){
        _id,
        startDate,
        category,
        ${localizeValue("title", locale)},
        ${localizeValue("description", locale)},
        'slug': ${SLUG_PROJECTION(locale)},
     },  
},
`;

export type dealsPlugResult = {
  _type: "dealsPlug";
  _key: string;

  items?: {
    _id: string;
    category?: string;
    startDate?: string;
    title?: string;
    description?: string;
    slug?: string;
  }[];
};
