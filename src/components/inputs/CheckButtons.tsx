/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { Fragment, useCallback, useContext, useMemo } from "react";
import { nanoid } from "nanoid";
import { ThemeContext } from "../../themes/ThemeContext";

type CheckButtonsProps = {
  options: Array<{label: string, value: number, enabled: boolean}>,
  selected: number,
  onChange: (newValue: number) => void,
};

export const CheckButtons: React.FC<CheckButtonsProps> = ({
  options,
  selected,
  onChange: onChangeOrig,
}) => {
  const theme = useContext(ThemeContext);
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.currentTarget.value);
    onChangeOrig(newValue);
  }, [onChangeOrig]);

  const radioGroup = useMemo(() => nanoid(), []);

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "row",
        gap: "0.3em",
        lineHeight: 1.4,
        "input[type=radio]": {
          display: "none",
          "+label": {
            padding: "0",
            flex: 1,
            textAlign: "center",
            fontSize: "1.4em",
            fontWeight: "bold",
            border: "2px groove white",
            backgroundColor: theme.colors.backgroundPrimary,
            paddingBottom: "0.3em",
            borderRadius: "0.2em",
            ":hover": {
              textShadow: `0 0 0.3em ${theme.colors.glow}`,
            },
          },
          "&:checked+label": {
            border: "2px inset white",
            backgroundColor: theme.colors.accent,
            color: theme.colors.accentContrast,
            textShadow: `0 0 0.3em ${theme.colors.glow}`,
          },
          "&[disabled]+label": {
            opacity: 0.3, //
            ":hover": {
              textShadow: "none",
            },
          },
        },
      }}
    >
      {
        options.map<JSX.Element>(({ label, value, enabled }) => {
          const id = nanoid();
          return (
            <Fragment key={value}>
              <input
                name={radioGroup}
                id={id}
                type="radio"
                value={value}
                checked={value === selected}
                onChange={onChange}
                disabled={!enabled}//
              />
              <label htmlFor={id} tabIndex={0}>
                {label}
              </label>
            </Fragment>
          );
        })
      }
    </div>
  );
};
