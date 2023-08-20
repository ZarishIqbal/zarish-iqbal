import clsx from "clsx";
import React from "react";
import { Footer } from "../footer/Footer";
import { NavigationBar } from "../navigation/NavigationBar";
type LayoutProps = {
  children: JSX.Element;
  className?: string;
};
export const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "bg-[#FFFAFA]  dark:bg-[#484141cc] w-full h-screen dark:text-white text-primary",
        className
      )}
    >
      <NavigationBar />
      <div className="mx-auto max-w-7xl h-3/4 border-x border-gray-100 dark:border-[#766f6f]  overflow-scroll pb-10">
        {children}
      </div>
      <Footer />
    </div>
  );
};
