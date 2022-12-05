import {
  localizedQueryFn,
  localizeValue,
} from "PageBuilder/helper/withLocalization";

export const testimonialsPlugQuery: localizedQueryFn = (locale) => `
_type == 'testimonialsPlug'=>{
    _type,
    _key,
     'items': items{
        _id,
        ${localizeValue("title", locale)},
        ${localizeValue("description", locale)},
     },  
},
`;

export type testimonialsPlugResult = {
  _type: "testimonialsPlug";
  _key: string;
  items?: {
    _id: string;
    title?: string;
    description?: string;
  }[];
};
