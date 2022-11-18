import useButtonStyle from "@components/Button/useButtonStyle";
import { PortableTextMarkComponent } from "@portabletext/react";
import Link from "components/Link";
import { linkMarkResult } from "../linkMark.query";

const LinkMark: PortableTextMarkComponent<linkMarkResult> = (props) => {
  const { value, children } = props;

  const className = useButtonStyle();

  return (
    <Link className={className} {...value}>
      {children}
    </Link>
  );
};

export default LinkMark;
