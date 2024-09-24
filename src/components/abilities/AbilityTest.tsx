import { useCallback, useContext, useState } from "react";

import { useItemSheetContext } from "../../hooks/useSheetContexts";
import { ThemeContext } from "../../themes/ThemeContext";
import { assertAbilityItem, isGeneralAbilityItem } from "../../v10Types";
import { Button } from "../inputs/Button";
import { CheckButtons } from "../inputs/CheckButtons";
import { GridField } from "../inputs/GridField";
import { GridFieldStacked } from "../inputs/GridFieldStacked";
import { InputGrid } from "../inputs/InputGrid";
import { Translate } from "../Translate";

const defaultSpendOptions = new Array(8).fill(null).map((_, i) => {
  const label = i.toString();
  return { label, value: Number(label), enabled: true };
});

export const AbilityTest = () => {
  const { item } = useItemSheetContext();
  const theme = useContext(ThemeContext);
  const [spend, setSpend] = useState(0);

  const handleClickTest = useCallback(() => {
    void item.testAbility(spend);
    setSpend(0);
  }, [item, spend]);

  const handleClickSpend = useCallback(() => {
    void item.spendAbility(spend);
    setSpend(0);
  }, [item, spend]);

  const spendOptions = defaultSpendOptions.map((option) => {
    assertAbilityItem(item);
    return {
      ...option,
      enabled: option.value <= item.system.pool,
    };
  });

  const isGeneral = isGeneralAbilityItem(item);

  return (
    <InputGrid
      className={theme.panelClass}
      css={{
        padding: "1em",
        marginBottom: "1em",
        ...theme.panelStyleSecondary,
      }}
    >
      <GridField label="Spend">
        <CheckButtons
          onChange={setSpend}
          selected={spend}
          options={spendOptions}
        />
      </GridField>
      <GridFieldStacked>
        <div
          css={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Button
            css={{ flex: 1 }}
            disabled={spend === 0}
            onClick={handleClickSpend}
          >
            <Translate>{isGeneral ? "Simple Spend" : "Spend"}</Translate>
          </Button>
          {isGeneral && (
            <Button css={{ flex: 1 }} onClick={handleClickTest}>
              <Translate>Test</Translate> <i className="fa fa-dice" />
            </Button>
          )}
        </div>
      </GridFieldStacked>
    </InputGrid>
  );
};
