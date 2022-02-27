import React, { useCallback } from "react";
import classNames from "classnames";
import { SearchIcon } from "@heroicons/react/solid";

export interface SearchBoxProps {
  className?: string;
  value: string;
  onChange: (value: string) => void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  className,
  value,
  onChange,
}) => {
  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      onChange(value);
    },
    [onChange]
  );

  return (
    <div
      className={classNames(
        "flex h-12 w-full flex-row items-center rounded-md bg-slate-100 focus-within:bg-slate-200",
        className
      )}
    >
      <SearchIcon className="ml-3 h-6 w-6 text-gray-600" />
      <input
        className="h-full w-full bg-transparent p-3 text-gray-700 outline-none"
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
};
