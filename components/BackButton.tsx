import { useRouter } from "next/router";
import * as React from "react";
import ArrowIcon from "./ArrowIcon";

export interface IBackButtonProps {}

export function BackButton(props: IBackButtonProps) {
  const { locale, back, asPath } = useRouter();

  console.log(asPath);

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
