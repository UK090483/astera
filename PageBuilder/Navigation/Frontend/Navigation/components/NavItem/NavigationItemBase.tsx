import clsx from "clsx";
import useIsActive from "../../helper/useIsActive";
import { NavItem } from "../../types";

export type NavItemBaseProps = {
  icon?: boolean;
  hover?: boolean;
  bold?: boolean;
  place?: "link" | "dropdown" | "header" | "dropdown/link" | "customHeader";
  item: NavItem;
  align?: "center" | "left";

  className?: string;
};

export const NavigationItemBase: React.FC<NavItemBaseProps> = (props) => {
  const {
    children,
    icon,
    hover,
    bold,
    place,
    item,
    align = "center",
    className,
  } = props;
  const active = useIsActive(item);

  return (
    <span
      className={clsx(
        "block w-full px-5 py-4 tracking-wider leading-none whitespace-nowrap transition-colors text-base-mobile xl:text-base truncate ",
        "hover:underline decoration-2  underline-offset-4   items-center",
        {
          "text-black hover:bg-black  hover:text-white ":
            place === "dropdown/link",
          "font-bold": bold,
          " bg-white text-primary ": active,
          "text-center": align === "center",
          "text-left pl-0": align === "left",
          "h-[113px] pt-14 flex justify-end ": place === "customHeader",
        },
        className
      )}
    >
      {children}
      {icon && (
        <svg
          style={{ width: "1.5em", height: "1.5em" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`inline-block stroke-current transition-transform ${
            hover ? "rotate-90" : ""
          }`}
          fill="none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
    </span>
  );
};

export default NavigationItemBase;
