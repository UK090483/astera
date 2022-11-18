import React from "react";
import NextLink from "next/link";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  className?: string;
  internal?: string | null;
  onClick?: () => void;
  locale?: string;
  scroll?: boolean;
  role?: string;
  ["data-testid"]?: string;
}

export const Link: React.FC<LinkProps> = (props) => {
  const { href, children, className, internal, locale, onClick, scroll, role } =
    props;

  if (href) {
    return (
      <a
        href={href}
        role={role}
        className={className}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  if (!internal) return null;

  return (
    <NextLink
      onClick={onClick}
      href={internal}
      passHref
      locale={locale}
      scroll={scroll}
      className={className}
    >
      {children}
    </NextLink>
  );
};

export default Link;

export const ConditionalLink: React.FC<LinkProps & { condition: boolean }> = ({
  condition,
  ...rest
}) => {
  if (condition) {
    return <Link {...rest} />;
  }

  return <div className={rest.className}>{rest.children}</div>;
};
