import clsx from "clsx";

const useButtonStyle = () => {
  const className = clsx(
    "inline-block text-center px-8 md:px-12 py-1 md:py-2 rounded-full transition-all text-base bg-primary border-2 border-primary hover:text-primary hover:bg-transparent text-white whitespace-nowrap "
  );

  return className;
};

export default useButtonStyle;
