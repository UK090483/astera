import { useRouter } from "next/router";
import * as React from "react";
import ArrowIcon from "./ArrowIcon";
import Link from "./Link";

export const BackButton: React.FC<{
  internal?: string;
  onPageLink?: string;
}> = (props) => {
  const { internal, onPageLink } = props;

  const { locale } = useRouter();
  const label = locale === "en" ? "ZURÜCK" : "BACK";
  if (!internal) return null;

  const _internal = onPageLink ? `${internal}#${onPageLink}` : internal;
  return (
    <Link
      internal={_internal}
      className=" text-primary font-bold typo-color mb-8 flex items-center"
    >
      <ArrowIcon className=" fill-primary  rotate-180 w-6" />
      {label}
    </Link>
  );
};
