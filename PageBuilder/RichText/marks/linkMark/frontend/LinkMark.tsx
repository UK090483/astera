import useButtonStyle from "@components/Button/useButtonStyle";
import { PortableTextMarkComponent } from "@portabletext/react";
import Link from "components/Link";
import { linkMarkResult } from "../linkMark.query";

const LinkMark: PortableTextMarkComponent<linkMarkResult> = (props) => {
  const { value, children } = props;

  const className = useButtonStyle();

  if (!value?.href && !value?.internal) return <>{children}</>;

  return (
    <Link className={value?.asButton ? className : ""} {...value}>
      {children}
    </Link>
  );
};

export default LinkMark;
