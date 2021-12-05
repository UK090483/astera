import Button from "@components/Button/Button";
import { Button as ButtonType } from "types";

import {
  LinkResult,
  linkQuery,
} from "@services/pageBuilderService/queries/snippets";
import React from "react";

export const buttonPlugQuery = (locale: string) => `
_type == "button" => {
  _type,
  _key,
    label,
    inline,
    'link':link{
      ${linkQuery(locale)}
    }
}
`;

export interface ButtonPlugResult extends Omit<ButtonType, "link"> {
  link: LinkResult;
}

type ButtonPlugProps = ButtonPlugResult;
const ButtonPlug: React.FC<{ node: ButtonPlugProps }> = (props) => {
  const { link, label, position } = props.node;

  return (
    <Button href={link.href} external={link.external} onClick={() => {}}>
      {label}
    </Button>
  );
};

export default ButtonPlug;
export {};
