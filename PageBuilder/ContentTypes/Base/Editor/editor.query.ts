import { heroQueryProjection } from "../../../Components/Hero/hero.query";
import { heroResult } from "../../../Components/Hero/hero.query";
import {
  imageGalleryPlugQuery,
  ImageGalleryPlugResult,
} from "../../../Components/ImageGallery/imageGallery.query";
import {
  listProjection,
  listingQueryResult,
} from "../../../Components/Listing/listing.query";

import { sectionBlockQuery } from "../../../Components/Section/section.query";
import { sectionType } from "../../../Components/Section/SectionType";
import { localizedQueryFn } from "../../../helper/withLocalization";

export const editorQuery: localizedQueryFn = (locale) => `
_type,
_key,
${heroQueryProjection(locale)}
${sectionBlockQuery(locale)}
${listProjection(locale)}
${imageGalleryPlugQuery(locale)}
`;

export type EditorResult = (
  | heroResult
  | sectionType
  | listingQueryResult
  | ImageGalleryPlugResult
)[];
