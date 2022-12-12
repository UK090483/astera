import * as React from "react";

import { useCardContext } from "./CardContext";
import Link from "components/Link";
import useButtonStyle from "@components/Button/useButtonStyle";
import clsx from "clsx";
import ArrowIcon from "@components/ArrowIcon";
import useTranslation from "@hooks/useTranslation";

interface ICardLinkProps {
  asButton?: boolean;
  text?: string;
  className?: string;
}

const CardLink: React.FunctionComponent<ICardLinkProps> = ({
  asButton,
  text,
  className,
}) => {
  const { slug, link } = useCardContext();
  const btnClassName = useButtonStyle();
  const { btnText } = useTranslation({
    btnText: { default: "MEHR INFO", en: "MORE INFO" },
  });

  const _link = link
    ? link.internal + `${link.onPageLink ? "#" + link.onPageLink : ""}`
    : undefined;

  if (slug || _link)
    return (
      <Link
        className={clsx(
          "group",
          {
            [btnClassName]: asButton,
            "w-fit mx-auto ": asButton,
            "whitespace-nowrap font-bold  w-fit flex justify-center items-center":
              !asButton,
          },
          className
        )}
        internal={slug || _link}
      >
        {!asButton && (
          <ArrowIcon className="w-4 fill-current mr-2  group-hover:animate-bounceSide " />
        )}
        {text ? text : btnText}
      </Link>
    );

  return null;
};

export default CardLink;
