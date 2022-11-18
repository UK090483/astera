import * as React from "react";
import clsx from "clsx";

interface ICardInfoProps {
  center?: boolean;
  variant?: "centerBox";
  className?: string;
}
export const CardInfo: React.FunctionComponent<ICardInfoProps> = (props) => {
  const { center, children, variant, className } = props;
  return (
    <div
      className={clsx(
        "w-full  flex flex-col gap-2 ",
        {
          "text-center": center,
          "flex justify-center  px-sides py-12 md:px-12 md:w-1/2":
            variant === "centerBox",
        },
        className
      )}
    >
      {children}
    </div>
  );
};
