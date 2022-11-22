import Card from "@components/Card/Card";

import { ListingItem } from "PageBuilder/Components/Listing/listing.query";
import * as React from "react";

export interface IPersonCardProps extends ListingItem {
  showLink?: boolean;
}

export function PersonCard(props: IPersonCardProps) {
  const { showLink = true, ...card } = props;

  return (
    <Card.Wrap {...card} noLink className="mb-12">
      <Card.Image variant="round" elevated />
      <Card.Info center>
        <Card.Title />
        <Card.SubTitle />
        <Card.Link text={"Zum CV"} asButton={true} className="mt-6" />
      </Card.Info>
    </Card.Wrap>
  );
}
