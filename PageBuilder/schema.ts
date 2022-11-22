import { withLocalization } from "./helper/withLocalization";
import { navigationSchema } from "./Navigation/navigation.schema";

import pageSchema from "./ContentTypes/Page/page.schema";
import newsSchema from "./ContentTypes/news/news.schema";
import personSchema from "./ContentTypes/Person/person.schema";

import heroSchema from "./Components/Hero/hero.schema";
import sectionSchema from "./Components/Section/section.schema";
import listingSchema from "./Components/Listing/listing.schema";
import imageGallerySchema from "./Components/ImageGallery/ImageGallery.schema";

import seoSchema from "./Objects/Seo/Seo.schema";
import defaultImage from "./Objects/DefaultImage/defaultImage.schema";

import defaultRichTextSchema from "./RichText/defaultRichText.schema";
import heroRichTextSchema from "./RichText/heroRichText.schema";
import imagePlugSchema from "./RichText/Plugs/ImagePlug/ImagePlug.schema";
import EmbedHtmlSchema from "./RichText/Plugs/EmbedHTML/EmbedHtml.schema";
import VideoPlugSchema from "./RichText/Plugs/videoPlug/video.schema";
import linkSchema from "./Objects/link/link.schema";
import { locale } from "./constants";
import { SettingsDocument } from "./Settings/settings.schema";
import linkMarkSchema from "./RichText/marks/linkMark/linkMark.schema";
import personSectionSchema from "./Components/Person/PersonSection";
import testimonialItem from "./Objects/Testimonial/testimonial.item.schema";
import newsSectionSchema from "./Components/News/NewsSection";
import { dealsPlugSchema } from "./RichText/Plugs/Deals/deals.shema";

const localizedSchema = withLocalization(
  [
    SettingsDocument,
    ...navigationSchema,
    ...seoSchema,
    defaultImage,
    testimonialItem,
    linkSchema,
    linkMarkSchema,
    pageSchema,
    newsSchema,
    dealsPlugSchema,
    newsSectionSchema,
    heroSchema,
    sectionSchema,
    listingSchema,
    imageGallerySchema,
    EmbedHtmlSchema,
    imagePlugSchema,
    VideoPlugSchema,
    defaultRichTextSchema,
    heroRichTextSchema,
    personSchema,
    personSectionSchema,
  ],
  locale
);

export default localizedSchema;
