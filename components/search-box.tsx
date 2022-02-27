import React from "react";
import classNames from "classnames";

export interface SearchBoxProps {
  className?: string;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        "h-12 w-full rounded-md bg-slate-100 focus-within:bg-slate-200",
        className
      )}
    >
      <input
        className="h-full w-full bg-transparent p-4 text-gray-700 outline-none"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};
