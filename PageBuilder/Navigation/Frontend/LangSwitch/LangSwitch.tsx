import Link from "@components/Link";
import { useRouter } from "next/router";
import React from "react";

import { LangSwitcherResult } from "../../navigation.types";

export interface LangSwitchProps {
  className?: string;
  LangSwitcherResult?: LangSwitcherResult;
  onClick?: () => void;
}

export const LangSwitch: React.FC<LangSwitchProps> = (props) => {
  const { className, LangSwitcherResult, onClick = () => {} } = props;

  const { locale } = useRouter();

  if (!LangSwitcherResult) return null;

  const items = Object.entries(LangSwitcherResult).map(([key, item]) => ({
    ...item,
    key,
  }));

  return (
    <div className={`flex ${className} pr-2`}>
      {items.map((item) => {
        return (
          <Link
            aria-label={item.title}
            onClick={onClick}
            scroll={false}
            key={item.key}
            internal={item.link || "/"}
            locale={item.key}
            className={`text-white px-1 w-auto h-5 uppercase flex items-center justify-center  font-bold  border-current  leading-none hover:underline border-2 ${
              item.key === locale ? "hidden" : ""
            } `}
          >
            {item.key}
          </Link>
        );
      })}
    </div>
  );
};
