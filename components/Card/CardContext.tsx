import { ListingItem } from "PageBuilder/Components/Listing/listing.query";
import React from "react";

interface CardContextValues extends ListingItem {}

const CardContext = React.createContext<CardContextValues>({ key: "x" });

export const CardContextProvider: React.FC<CardContextValues> = ({
  children,
  ...rest
}) => {
  return (
    <CardContext.Provider value={{ ...rest }}>{children}</CardContext.Provider>
  );
};

export const useCardContext = () => {
  return React.useContext(CardContext);
};
