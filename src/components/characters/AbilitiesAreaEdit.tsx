/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { Fragment, useContext } from "react";
import { generalAbility, investigativeAbility } from "../../constants";
import { sortEntitiesByName } from "../../functions";
import { GumshoeActor } from "../../module/GumshoeActor";
import { GumshoeItem } from "../../module/GumshoeItem";
import { ThemeContext } from "../../theme";
import { assertActiveCharacterDataSource, isAbilityDataSource } from "../../types";
import { AbilitySlugEdit } from "./AbilitySlugEdit";

type AbilitiesAreaEditProps = {
  actor: GumshoeActor,
  flipLeftRight?: boolean,
};

export const AbilitiesAreaEdit: React.FC<AbilitiesAreaEditProps> = ({
  actor,
  flipLeftRight,
}) => {
  assertActiveCharacterDataSource(actor.data);
  const theme = useContext(ThemeContext);

  const investigativeAbilities: { [category: string]: GumshoeItem[] } = {};
  const generalAbilities: { [category: string]: GumshoeItem[] } = {};

  for (const item of actor.items.values()) {
    if (!isAbilityDataSource(item.data)) {
      continue;
    }
    if (item.data.type === investigativeAbility) {
      const cat = item.data.data.category || "Uncategorised";
      if (investigativeAbilities[cat] === undefined) {
        investigativeAbilities[cat] = [];
      }
      investigativeAbilities[cat].push(item);
    } else if (item.type === generalAbility) {
      const cat = item.data.data.category || "Uncategorised";
      if (generalAbilities[cat] === undefined) {
        generalAbilities[cat] = [];
      }
      generalAbilities[cat].push(item);
    }
  }

  return (
    <Fragment>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateAreas: (flipLeftRight) ? "'general investigative'" : "'investigative general'",
          columnGap: "1em",
        }}
      >
        <div
          css={{
            gridArea: "investigative",
            display: "grid",
            gridTemplateAreas: "'isocc ability rating'",
            gridTemplateColumns: "2em max-content max-content",
            columnGap: "0.5em",
            alignItems: "center",
            height: "0",
          }}
        >
          <i
            css={{ gridColumn: "isocc", font: theme.displayFont, fontSize: "smaller" }}
            title="Occupational Ability"
          >
            Occ.
          </i>
          <i css={{ gridColumn: "rating", font: theme.displayFont, fontSize: "smaller" }}>Rating</i>
          {Object.keys(investigativeAbilities).sort().map<JSX.Element>((cat) => (
            <Fragment
              key={cat}
            >
              <h2 css={{ gridColumn: "1 / -1" }}>{cat}</h2>
              {
                sortEntitiesByName(investigativeAbilities[cat]).map<JSX.Element>((ability) => (
                  <AbilitySlugEdit key={ability.id} ability={ability}/>
                ))
              }
            </Fragment>
          ))}
        </div>
        <div
          css={{
            gridArea: "general",
            display: "grid",
            gridTemplateAreas: "'isocc ability rating'",
            gridTemplateColumns: "2em max-content max-content",
            columnGap: "0.5em",
            alignItems: "center",
            height: "0",
          }}
        >
          <i
            css={{ gridColumn: "isocc", font: theme.displayFont, fontSize: "smaller" }}
            title="Occupational Ability"
          >
            Occ.
          </i>
          <i css={{ gridColumn: "rating", font: theme.displayFont, fontSize: "smaller" }}>Rating</i>
          {Object.keys(generalAbilities).sort().map<JSX.Element>((cat) => (
            <Fragment
              key={cat}
            >
              <h2 css={{ gridColumn: "1 / -1" }}>{cat}</h2>
              {
                sortEntitiesByName(generalAbilities[cat]).map<JSX.Element>((ability) => (
                  <AbilitySlugEdit key={ability.id} ability={ability}/>
                ))
              }
            </Fragment>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
