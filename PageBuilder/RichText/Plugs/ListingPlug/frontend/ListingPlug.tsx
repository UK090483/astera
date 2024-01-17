import { PortableTextComponent } from "@portabletext/react";
import { listingQueryResult } from "PageBuilder/Components/Listing/listing.query";
import ListingBlock from "PageBuilder/Components/Listing/frontend/ListingBlock";

import React from "react";

const ListingPlug: PortableTextComponent<listingQueryResult> = (props) => {
  const { value } = props;

  return <ListingBlock {...value} />;
};

export default ListingPlug;
