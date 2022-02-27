import React from "react";
import classNames from "classnames";
import Image from "next/image";

import { Note } from "utils";

export interface CheatsheetCardProps {
  className?: string;
  note: Note;
}

export const CheatsheetCard: React.FC<CheatsheetCardProps> = ({
  className,
  note,
}) => {
  return (
    <div
      className={classNames(
        "cursor-pointer rounded-xl border border-slate-100 p-5 transition-all  hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100",
        className
      )}
    >
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          {note.icon && (
            <div className="mr-2 flex items-center justify-center">
              <Image
                src={note.icon}
                alt={note.name}
                width={24}
                height={24}
                objectFit="contain"
              />
            </div>
          )}
          <div className="text-xl font-semibold text-gray-600">{note.name}</div>
        </div>
      </div>
      <div className="mt-2 text-gray-400">{note.description}</div>
    </div>
  );
};
