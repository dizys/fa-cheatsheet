import React from "react";
import classNames from "classnames";

export interface ContainerProps {
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
}) => {
  return (
    <div className={classNames("container mx-auto p-4", className)}>
      {children}
    </div>
  );
};
