import React from "react";
import classNames from "classnames";

const TITLES_COMMON_CLASSES = "pt-6 pb-2 font-bold leading-tight";

export const H1: React.FC<JSX.IntrinsicElements["h1"]> = ({
  children,
  ...props
}) => {
  return (
    <h1
      className={classNames(
        TITLES_COMMON_CLASSES,
        "my-5 border-b  border-slate-200 pb-5 pt-0 text-5xl"
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export const H2: React.FC<JSX.IntrinsicElements["h2"]> = ({
  children,
  ...props
}) => {
  return (
    <h2
      className={classNames(
        TITLES_COMMON_CLASSES,
        "mt-6 border-t border-slate-200 pt-10 text-3xl"
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export const H3: React.FC<JSX.IntrinsicElements["h3"]> = ({
  children,
  ...props
}) => {
  return (
    <h3 className={classNames(TITLES_COMMON_CLASSES, "text-2xl")} {...props}>
      {children}
    </h3>
  );
};

export const H4: React.FC<JSX.IntrinsicElements["h4"]> = ({
  children,
  ...props
}) => {
  return (
    <h3 className={classNames(TITLES_COMMON_CLASSES, "text-xl")} {...props}>
      {children}
    </h3>
  );
};

export const H5: React.FC<JSX.IntrinsicElements["h5"]> = ({
  children,
  ...props
}) => {
  return (
    <h3 className={classNames(TITLES_COMMON_CLASSES, "text-lg")} {...props}>
      {children}
    </h3>
  );
};

export const P: React.FC<JSX.IntrinsicElements["p"]> = ({
  children,
  ...props
}) => {
  return (
    <p className="py-2 text-base" {...props}>
      {children}
    </p>
  );
};
