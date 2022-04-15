/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useMemo } from "react";
import { nanoid } from "nanoid";
import { IdContext } from "../IdContext";
import { Translate } from "../Translate";

type GridFieldProps = {
  label?: string,
  className?: string,
  children?: any,
  noLabel?: boolean,
  noTranslate?: boolean,
  indent?: boolean|number,
};

export const GridField: React.FC<GridFieldProps> = ({
  label,
  className,
  children,
  noLabel = false,
  noTranslate = false,
  indent = 0,
}) => {
  const id = useMemo(() => nanoid(), []);
  const indentWidth =
  `${indent === false ? 0 : indent === true ? 1 : indent}em`;
  return (
    <IdContext.Provider value={id}>
      <label
        htmlFor={noLabel ? undefined : id}
        css={{
          gridColumn: "label",
          paddingTop: "0.3em",
          paddingRight: "0.5em",
          paddingLeft: indentWidth,
        }}
        className={className}
      >
        {label && (noTranslate ? label : <Translate>{label}</Translate>)}
      </label>
      <div
        className={className}
        css={{
          gridColumn: "control",
        }}
      >
        {children}
      </div>
    </IdContext.Provider>
  );
};
