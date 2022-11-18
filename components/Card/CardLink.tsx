import * as React from "react";

import { useCardContext } from "./CardContext";
import Link from "components/Link";
import useButtonStyle from "@components/Button/useButtonStyle";

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

  if (slug || link)
    return (
      <Link
        className={`${
          asButton
            ? btnClassName + "w-fit mx-auto"
            : "whitespace-nowrap text-primary font-bold"
        } ${className}`}
        // href={link?.href}
        internal={slug || link?.internal}
      >
        {!asButton && <Arrow />}
        {text ? text : "Mehr Info"}
      </Link>
    );

  return null;
};

export default CardLink;

const Arrow = () => {
  return (
    <svg
      viewBox="0 0 17 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=" w-fit h-[1em] inline"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1713 11.8741L16.1713 6.87408L16.9209 5.93704L16.1713 5L12.1713 0L9.82869 1.87409L13.0791 5.93704L9.82869 10L12.1713 11.8741ZM1.14441e-05 7.4978L9.00001 7.4978L9.00001 4.4978L1.14441e-05 4.4978V7.4978Z"
        fill="#BF664A"
      />
    </svg>
  );
};
