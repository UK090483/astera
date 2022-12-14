import type {
  SanityReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
};

/**
 * Site config
 *
 *
 */
export interface SiteConfig extends SanityDocument {
  _type: "siteConfig";

  /**
   * Home Page β `reference`
   *
   *
   */
  indexPage?: SanityReference<Page>;

  /**
   * Imprint Page β `reference`
   *
   *
   */
  imprintPage?: SanityReference<Page>;

  /**
   * Privacy Policy Page β `reference`
   *
   *
   */
  privacyPolicyPage?: SanityReference<Page>;
}

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Title β `string`
   *
   *
   */
  title?: string;

  /**
   * πΊπΈ Title Englisch β `string`
   *
   *
   */
  title_en?: string;

  /**
   * Description β `text`
   *
   * should be between 50 and 160 characters
   */
  description?: string;

  /**
   * πΊπΈ Description Englisch β `text`
   *
   * should be between 50 and 160 characters
   */
  description_en?: string;

  /**
   * featuredImage β `image`
   *
   *
   */
  featuredImage?: {
    _type: "featuredImage";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Slug β `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * πΊπΈ Slug Englisch β `slug`
   *
   *
   */
  slug_en?: { _type: "slug_en"; current: string };

  /**
   * Page sections β `array`
   *
   * Add, edit, and reorder sections
   */
  body?: Array<Hero | Section | Listing>;

  /**
   * Seo β `seo`
   *
   *
   */
  seo?: Seo;
}

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: "post";

  /**
   * Title β `string`
   *
   *
   */
  title?: string;

  /**
   * πΊπΈ Title Englisch β `string`
   *
   *
   */
  title_en?: string;

  /**
   * Description β `text`
   *
   * should be between 50 and 160 characters
   */
  description?: string;

  /**
   * πΊπΈ Description Englisch β `text`
   *
   * should be between 50 and 160 characters
   */
  description_en?: string;

  /**
   * featuredImage β `image`
   *
   *
   */
  featuredImage?: {
    _type: "featuredImage";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Slug β `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * πΊπΈ Slug Englisch β `slug`
   *
   *
   */
  slug_en?: { _type: "slug_en"; current: string };

  /**
   * Seo β `seo`
   *
   *
   */
  seo?: Seo;
}

/**
 * Event
 *
 *
 */
export interface Event extends SanityDocument {
  _type: "event";

  /**
   * Title β `string`
   *
   *
   */
  title?: string;

  /**
   * πΊπΈ Title Englisch β `string`
   *
   *
   */
  title_en?: string;

  /**
   * Description β `text`
   *
   * should be between 50 and 160 characters
   */
  description?: string;

  /**
   * πΊπΈ Description Englisch β `text`
   *
   * should be between 50 and 160 characters
   */
  description_en?: string;

  /**
   * featuredImage β `image`
   *
   *
   */
  featuredImage?: {
    _type: "featuredImage";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Datum β `date`
   *
   *
   */
  date?: string;

  /**
   * End Datum β `date`
   *
   *
   */
  endDate?: string;

  /**
   * Seo β `seo`
   *
   *
   */
  seo?: Seo;
}

/**
 * Menu config
 *
 *
 */
export interface MenuConfig extends SanityDocument {
  _type: "menuConfig";

  /**
   * Main Navigation β `array`
   *
   *
   */
  mainNav?: Array<NavigationItem | NavigationDropdown | NavigationMegaMenu>;
}

/**
 * Seo config
 *
 *
 */
export interface SeoConfig extends SanityDocument {
  _type: "seoConfig";

  /**
   * Default β `seo`
   *
   *
   */
  seo?: Seo;
}

export type NavigationMegaMenuItem = {
  _type: "navigationMegaMenuItem";
  /**
   * Label β `string`
   *
   *
   */
  label?: string;

  /**
   * Main Navigation β `array`
   *
   *
   */
  items?: Array<NavigationItem>;
};

export type NavigationMegaMenu = {
  _type: "navigationMegaMenu";
  /**
   * Label β `string`
   *
   *
   */
  label?: string;

  /**
   * Main Navigation β `array`
   *
   *
   */
  items?: Array<NavigationMegaMenuItem | NavigationItem>;
};

export type NavigationDropdown = {
  _type: "navigationDropdown";
  /**
   * Label β `string`
   *
   *
   */
  label?: string;

  /**
   * Main Navigation β `array`
   *
   *
   */
  items?: Array<NavigationItem>;
};

export type NavigationItem = {
  _type: "navigationItem";
  /**
   * Label β `string`
   *
   *
   */
  label?: string;

  /**
   * Link β `link`
   *
   *
   */
  link?: Link;
};

export type Seo = {
  _type: "seo";
  /**
   * Meta Title β `string`
   *
   * Title used for search engines and browsers.
   */
  metaTitle?: string;

  /**
   * Meta Description β `text`
   *
   * Description for search engines.
   */
  metaDesc?: string;

  /**
   * Share Title β `string`
   *
   * TItle used for social sharing cards.
   */
  shareTitle?: string;

  /**
   * Share Description β `text`
   *
   * Description for social sharing cards.
   */
  shareDesc?: string;

  /**
   * Share Graphic β `image`
   *
   * Share graphics will be cropped to 1200x630
   */
  shareGraphic?: {
    _type: "shareGraphic";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type Section = {
  _type: "section";
  /**
   * Title β `string`
   *
   *
   */
  title?: string;

  /**
   * πΊπΈ Title Englisch β `string`
   *
   *
   */
  title_en?: string;

  /**
   * Content β `defaultRichtext`
   *
   *
   */
  content?: DefaultRichtext;

  /**
   * πΊπΈ Content Englisch β `defaultRichtext`
   *
   *
   */
  content_en?: DefaultRichtext;
};

export type Hero = {
  _type: "hero";
  /**
   * Title β `string`
   *
   *
   */
  title?: string;

  /**
   * Text β `array`
   *
   *
   */
  text?: Array<SanityBlock>;
};

export type Listing = {
  _type: "listing";
  /**
   * Name β `string`
   *
   *
   */
  name?: string;

  /**
   * Content type β `string`
   *
   *
   */
  contentType?: "post" | "event";

  /**
   * Post Items β `reference`
   *
   *
   */
  postItems?: SanityReference<Post>;

  /**
   * Event Items β `reference`
   *
   *
   */
  eventItems?: SanityReference<Event>;
};

export type Link = {
  _type: "link";
  /**
   * Internal Link β `reference`
   *
   *
   */
  internal?: SanityReference<Page | Post>;

  /**
   * External Link β `url`
   *
   *
   */
  href?: string;
};

export type DefaultRichtext = Array<SanityBlock>;

export type Documents =
  | SiteConfig
  | Page
  | Post
  | Event
  | MenuConfig
  | SeoConfig;
