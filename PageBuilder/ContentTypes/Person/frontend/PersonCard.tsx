import Card from "@components/Card/Card";
import { useSection } from "@components/Section/SectionContext";
import useTranslation from "@hooks/useTranslation";
import clsx from "clsx";

import { ListingItem } from "PageBuilder/Components/Listing/listing.query";
import * as React from "react";

export interface IPersonCardProps extends ListingItem {
  showLink?: boolean;
}

export function PersonCard(props: IPersonCardProps) {
  const { showLink = true, ...card } = props;

  const { bgColor } = useSection();

  const { linkText } = useTranslation({
    linkText: { default: "Zum CV", en: "To CV" },
  });

  const isDarkBg = bgColor === "secondary";

  return (
    <Card.Wrap {...card} noLink className="mb-12">
      <Card.Image variant="round" elevated />
      <Card.Info center>
        <Card.Title
          className={clsx("  text-2xl", {
            "text-secondary": !isDarkBg,
            "text-white": isDarkBg,
          })}
        />
        <Card.SubTitle
          className={clsx("tracking-wider text-lg", {
            "text-secondary": !isDarkBg,
            "text-white": isDarkBg,
          })}
        />
        <Card.Link text={linkText} asButton={true} className="mt-6" />
      </Card.Info>
    </Card.Wrap>
  );
}
