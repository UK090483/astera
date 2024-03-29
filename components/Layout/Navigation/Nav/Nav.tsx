import { Logo } from "@components/Layout/Logo";
import Link from "@components/Link";
import Svg from "@components/Svg";
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

  return (
    <>
      <nav className={clsx(" text-white transition-colors w-full ")}>
        <div className="container flex justify-between items-center w-full mx-auto px-sides">
          <Link className="pt-10 text-white" aria-label="Home" internal="/">
            <Logo
              className={clsx("z-50", {
                "stroke-primary fill-primary": open,
              })}
            />
          </Link>

          <div className=" h-full items-center justify-center ">
            {navItems && (
              <HeaderNavigation
                //@ts-ignore
                items={navItems}
                className="items-center justify-center hidden   menu:flex  "
              />
            )}
          </div>
          <div className="flex gap-4 flex-shrink-0 items-center  justify-end  pt-10">
            <LangSwitch className="flex" LangSwitcherResult={langSwitchData} />
            <a href={`mailto:${data?.footer?.emailAddress}`}>
              <Letter></Letter>
            </a>
          </div>

          {navItems && (
            <button
              data-testid="menu-overlay-toggle"
              onClick={() => setOpen((s) => !s)}
              aria-label={"Open the menu"}
              aria-expanded={open}
              className="menu:hidden mr-2 pt-10 z-50"
            >
              <Svg
                className={clsx(
                  "w-[30px] h-[30px] stroke-current fill-current",
                  { "stroke-primary fill-primary": open }
                )}
                icon={open ? "erase" : "hamburger"}
              />
            </button>
          )}
        </div>
      </nav>
      {navItems && (
        <NavigationMobile
          //@ts-ignore
          items={navItems}
          open={open}
          closeMenu={() => {
            setOpen(false);
          }}
        ></NavigationMobile>
      )}
    </>
  );
};

export default Nav;

const Letter = () => {
  return (
    <svg
      viewBox="0 0 30 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=" stroke-white stroke-2  h-5"
    >
      <path d="M28.297 1H1V19.998H28.297V1Z" />
      <path d="M1 1L14.676 13.676L28.325 1.027" />
    </svg>
  );
};
