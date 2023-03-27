import React, { useCallback, forwardRef } from "react";
import { SituationalModifier } from "../../types";
import { AsyncNumberInput } from "../inputs/AsyncNumberInput";
import { AsyncTextInput } from "../inputs/AsyncTextInput";

interface SituationalModifiersEditorRowProps {
  situationalModifier: SituationalModifier;
  index: number;
  onChangeModifier: (index: number, rating: number) => void;
  onChangeSituation: (index: number, description: string) => void;
  onDelete: (index: number) => void;
}

export const SituationalModifiersEditorRow = forwardRef<
  HTMLDivElement,
  SituationalModifiersEditorRowProps
>(
  (
    {
      situationalModifier: { modifier, situation },
      index,
      onChangeModifier,
      onChangeSituation,
      onDelete,
    },
    ref,
  ) => {
    const onChangeRatingCallback = useCallback(
      (newVal: number) => {
        onChangeModifier(index, newVal);
      },
      [index, onChangeModifier],
    );
    const onChangeDescriptionCallback = useCallback(
      (newDescription: string) => {
        onChangeSituation(index, newDescription);
      },
      [index, onChangeSituation],
    );

    return (
      <div
        ref={ref}
        css={{
          marginBottom: "0.5em",
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <AsyncNumberInput
            css={{
              flex: 1,
            }}
            value={modifier}
            onChange={onChangeRatingCallback}
          />
          <button
            css={{
              flexBasis: "min-content",
            }}
            onClick={() => {
              onDelete(index);
            }}
          >
            <i className="fas fa-trash" />
          </button>
        </div>
        <AsyncTextInput
          value={situation}
          onChange={onChangeDescriptionCallback}
        />
      </div>
    );
  },
);

SituationalModifiersEditorRow.displayName = "SituationalModifiersEditorRow";
