import {
  localizedQueryFn,
  localizeValue,
} from "PageBuilder/helper/withLocalization";

export const testimonialItemQuery: localizedQueryFn = (locale) => `
${localizeValue("title", locale)},
${localizeValue("description", locale)},
${localizeValue("source", locale)},
`;

export type testimonialItem = {
  title?: string;
  description?: string;
  source?: string;
};
