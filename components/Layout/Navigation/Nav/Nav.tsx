import { Logo } from "@components/Layout/Logo";
import Link from "@components/Link";
import Svg from "@components/Svg";
import { useScrollThreshold } from "@hooks/useScrollThreshold";
import { LangSwitch } from "PageBuilder/Navigation/Frontend/LangSwitch/LangSwitch";
import { HeaderNavigation } from "PageBuilder/Navigation/Frontend/Navigation/HeaderNavigation";
import NavigationMobile from "PageBuilder/Navigation/Frontend/Navigation/NavigationMobile";
import { usePageBuilderContext } from "PageBuilder/lib/PageBuilderContext";
import React from "react";
import clsx from "clsx";

const Nav: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const { data } = usePageBuilderContext();
  const navItems = data?.menu.mainNav;
  const langSwitchData = data?.menu.langSwitcher;
  // const scrolled = useScrollThreshold(100);

  return (
    <>
      <nav className={clsx(" text-white transition-colors w-full ")}>
        <div className="container flex justify-between w-full mx-auto px-sides">
          <Link aria-label="Home" internal="/">
            <Logo />
          </Link>

          <HeaderNavigation
            //@ts-ignore
            items={navItems || []}
            className="items-center justify-center hidden  menu:flex "
          />

          <div className="flex gap-4 flex-shrink-0 items-center">
            <LangSwitch
              className="hidden menu:flex"
              LangSwitcherResult={langSwitchData}
            />
            <a href="">
              <Letter></Letter>
            </a>
          </div>

          <button
            data-testid="menu-overlay-toggle "
            onClick={() => setOpen((s) => !s)}
            aria-label={"Open the menu"}
            aria-expanded={open}
            className="menu:hidden mr-2"
          >
            <Svg className="w-[30px] h-[30px] fill-current" icon="hamburger" />
          </button>
        </div>
      </nav>
      <NavigationMobile
        //@ts-ignore
        items={navItems}
        open={open}
        closeMenu={() => {
          setOpen(false);
        }}
      >
        <LangSwitch
          LangSwitcherResult={langSwitchData}
          onClick={() => {
            setOpen(false);
          }}
        />
      </NavigationMobile>
    </>
  );
};

export default Nav;

const Letter = () => {
  return (
    <svg
      width="34.5"
      viewBox="0 0 30 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.297 1H1V19.998H28.297V1Z"
        stroke="white"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M1 1L14.676 13.676L28.325 1.027"
        stroke="white"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};
