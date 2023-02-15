import List from "@components/Lists/ListWrap";
import { NewsCard } from "PageBuilder/ContentTypes/news/frontend/NewsCard";

import { listingQueryResult } from "../listing.query";

const NewsList = (props: listingQueryResult) => {
  const { variant, items } = props;

  return (
    <List.wrap
      hasLoadMore={variant !== "carousel"}
      contentType="news"
      variant={variant === "carousel" ? "carousel" : "grid"}
      items={items}
      useKey="key"
    >
      {(props) => {
        return <NewsCard {...props} />;
      }}
    </List.wrap>
  );
};

export default NewsList;
