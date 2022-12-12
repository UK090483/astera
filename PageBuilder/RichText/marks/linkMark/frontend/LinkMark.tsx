import useButtonStyle from "@components/Button/useButtonStyle";
import { PortableTextMarkComponent } from "@portabletext/react";
import Link from "components/Link";
import { linkMarkResult } from "../linkMark.query";

const LinkMark: PortableTextMarkComponent<linkMarkResult> = (props) => {
  const { value, children } = props;

  const className = useButtonStyle();

  if (!value?.href && !value?.internal) return <>{children}</>;

  const _internal = value?.internal
    ? value.internal + `${value.onPageLink ? "#" + value.onPageLink : ""}`
    : undefined;

  return (
    <Link
      className={value?.asButton ? className : " font-bold"}
      {...value}
      internal={_internal}
    >
      {children}
    </Link>
  );
};

export default LinkMark;
