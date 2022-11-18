import Link from "@components/Link";
import React from "react";
import useButtonStyle from "./useButtonStyle";

type ButtonProps = {
  onClick?: () => void;
  href?: string | null;
  internal?: string;
  tabIndex?: -1 | 0;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { children, onClick = () => {}, href, internal, tabIndex = 0 } = props;

  const className = useButtonStyle();

  if (href || internal) {
    return (
      <Link className={className} href={href || undefined} internal={internal}>
        {children}
      </Link>
    );
  }
  return (
    <button
      tabIndex={tabIndex}
      onClick={onClick}
      className={className}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
