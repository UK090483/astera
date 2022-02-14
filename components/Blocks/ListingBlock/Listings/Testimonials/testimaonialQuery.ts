import { imageMeta } from "lib/SanityImage/query";

const testimonialItemQuery = (locale: string) => `
...,
_id,
'image':image{${imageMeta}},
'description':coalesce(description_${locale},description),
 name,
'position':coalesce(position_${locale},position),
'text':coalesce(text_${locale},text),
`;

export const testimonialQuery = (locale: string) => `
'testimonialItems': testimonialItems[]->{${testimonialItemQuery(locale)}}
`;
