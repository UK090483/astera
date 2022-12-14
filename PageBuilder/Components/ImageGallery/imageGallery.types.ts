import { ImageResult } from "../../constants";
type imageView = "cover" | "contain";
type variant = "grid" | "masonry";

export interface ImageGalleryPlugItem {
  _type: "imageGalleryItem";
  title?: string | null;
  text?: string | null;
  size?: "2w" | "2h" | "2wh";
  image?: ImageResult;
  variant?: imageView;

  // link?: LinkResult;
  contain?: boolean;
  _key: string;
}

export interface ImageGalleryPlugResult {
  _type: "imageGalleryPlug";
  _key: string;
  variant?: variant | null;
  imageView?: imageView | null;
  name?: string;
  rows?: number;
  rows_mobile?: number;
  ratio?: "1:1" | "16:9" | "2:3" | "3:2";
  items: ImageGalleryPlugItem[];
  lightBox?: boolean | null;
}
