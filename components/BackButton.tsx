import useTranslation from "@hooks/useTranslation";
import clsx from "clsx";

import * as React from "react";
import ArrowIcon from "./ArrowIcon";
import Link from "./Link";

export const BackButton: React.FC<{
  internal?: string;
  onPageLink?: string;
  direction?: "left" | "right";
}> = (props) => {
  const { internal, onPageLink, children, direction = "left" } = props;

  const { label } = useTranslation({
    label: { en: "BACK", default: "ZURÜCK" },
  });

  if (!internal) return null;

  const _internal = onPageLink ? `${internal}#${onPageLink}` : internal;
  return (
    <Link
      internal={_internal}
      className={clsx(
        "group",
        " text-primary font-bold typo-color mb-8 flex gap-3 items-center",
        { " flex-row-reverse": direction === "right" }
      )}
    >
      <div className="group-hover:animate-bounceSide">
        <ArrowIcon
          className={clsx(" fill-primary w-6", {
            " flex-row-reverse rotate-180": direction === "left",
            " flex-row-reverse": direction === "right",
          })}
        />
      </div>
      {children ? children : label}
    </Link>
  );
};
