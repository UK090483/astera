import { useSection } from "@components/Section/SectionContext";
import clsx from "clsx";

const useButtonStyle = () => {
  const { bgColor } = useSection();

  const isDarkBg = bgColor === "secondary";

  const className = clsx(
    "inline-block text-center px-8 md:px-12 py-1 md:py-2 rounded-full transition-all text-base bg-primary border-2  border-primary hover:bg-transparent text-white whitespace-nowrap ",
    {
      " hover:text-white hover:border-white": isDarkBg,
      " hover:text-primary ": !isDarkBg,
    }
  );

  return className;
};

export default useButtonStyle;
