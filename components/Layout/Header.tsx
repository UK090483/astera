import React from "react";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between w-full">
      {children}
    </div>
  );
};
