import Hero from "@components/organisms/Hero/Hero";
import React from "react";

import { AppLocations } from "types";
import { imageMeta, ImageMetaResult } from "../queries/snippets";

export const heroBlockQuery = `
_type == "hero" => {
    _type,
    _key,
 'photo':image{${imageMeta}},
 title,
 text,
 btnText,
 btnLink,
 filterIntensity,
 filterColor,
 size
}
`;

export interface HeroBlogResult {
  _type: "hero";
  _key: string;
  photo?: ImageMetaResult;
  title?: string;
  text?: string;
  btnText?: string;
  btnLink?: string;
  filterIntensity?:
    | "0"
    | "10"
    | "20"
    | "30"
    | "40"
    | "50"
    | "60"
    | "70"
    | "80"
    | "90";
  filterColor?: "white" | "black";
  size?: "full" | "1/2" | "2/3" | "1/3";
}

export interface HeroBlockProps extends HeroBlogResult {
  lang: AppLocations;
}

const HeroBlock: React.FC<HeroBlockProps> = (props) => {
  return <Hero {...props} />;
};

export default HeroBlock;