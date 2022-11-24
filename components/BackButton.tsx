import { useRouter } from "next/router";
import * as React from "react";
import ArrowIcon from "./ArrowIcon";

export function BackButton() {
  const { locale, back } = useRouter();
  const label = locale === "en" ? "ZURÜCK" : "BACK";
  return (
    <button
      onClick={back}
      className=" text-primary font-bold typo-color mb-8 flex items-center"
    >
      <ArrowIcon className=" fill-primary  rotate-180 " />
      {label}
    </button>
  );
}
