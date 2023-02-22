import List from "@components/Lists/ListWrap";
import Section from "@components/Section/Section";
import { rest } from "lodash";
import { PersonCard } from "PageBuilder/ContentTypes/Person/frontend/PersonCard";
import RichText from "PageBuilder/RichText/frontend/RichText";
import { items } from "../listing.items";
import { listingQueryResult } from "../listing.query";

const PersonList: React.FC<listingQueryResult> = (props) => {
  const { name, backgroundColor, header, items } = props;
  return (
    <Section
      id={name}
      width="l"
      noProse
      noPadding
      {...rest}
      bg={backgroundColor}
    >
      {header && (
        <div className="typo typo-spacings  mt-12 mb-24 text-center">
          <RichText content={header} />
        </div>
      )}
      <List.wrap items={items} useKey="key" variant="flex">
        {(props) => <PersonCard {...props} />}
      </List.wrap>
    </Section>
  );
};

export default PersonList;
