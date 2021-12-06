import clsx from "clsx";
import React from "react";
import { SectionContextProvider } from "./SectionContext";

interface SectionProps {
  width?: "full" | "m" | "l" | "s" | "responsive";
  bg?: "white" | "grey" | "black" | "primary" | "secondary";
  className?: string;
  id?: string;
  noPadding?: boolean;
  as?: "section" | "div" | "ul";
  asInner?: "div" | "ul";
}

export const Section: React.FC<SectionProps> = ({
  children,
  width = "m",
  className,
  id,
  bg = "white",
  noPadding = false,
  as: Component = "section",
  asInner: InnerComponent = "div",
}) => {
  return (
    <SectionContextProvider bgColor={bg} width={width}>
      <Component
        id={id}
        className={clsx(`w-full`, {
          "bg-white": bg === "white",
          "bg-primary": bg === "primary",
          "bg-secondary": bg === "secondary",
          "bg-gray-300": bg === "grey",
        })}
      >
        <InnerComponent
          className={clsx("mx-auto ", className, {
            "max-w-screen-md ": width === "s",
            "max-w-screen-lg ": width === "m",
            "max-w-screen-xl ": width === "l",
            container: width === "responsive",
            "px-4": width !== "full" && !noPadding,
          })}
        >
          {children}
        </InnerComponent>
      </Component>
    </SectionContextProvider>
  );
};