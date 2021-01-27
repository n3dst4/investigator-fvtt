/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { weapon } from "../../constants";
import { sortEntitiesByName } from "../../functions";
import { TrailActor } from "../../module/TrailActor";
import { WeaponRow } from "./WeaponRow";

type WeaponsAreaProps = {
  actor: TrailActor,
};

export const WeaponsArea: React.FC<WeaponsAreaProps> = ({
  actor,
}) => {
  const items = actor.getWeapons();
  return (
    <div>
      <h1>
        Weapons
        <button
          css={{
            float: "right",
            width: "auto",
          }}
          onClick={async () => {
            await actor.createOwnedItem({
              type: weapon,
              name: "New weapon",
            }, {
              renderSheet: true,
            });
          }}
        >
          <i className="fa fa-plus"/>Add Weapon
        </button>
      </h1>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "1fr max-content max-content max-content max-content max-content 1fr",
          gridAutoRows: "min-content",
          columnGap: "0.5em",
          whiteSpace: "nowrap",
          ".header": {
            fontWeight: "bold",
          },
          // rowGap: "0.5em",
        }}
      >
        <div className="header" css={{ gridColumn: 1 }}>
          Weapon
        </div>
        <div className="header" css={{ gridColumn: 2 }}>
          Damage
        </div>
        <div className="header" css={{ gridColumn: 3 }}>
          Point Blank
        </div>
        <div className="header" css={{ gridColumn: 4 }}>
          Close
        </div>
        <div className="header" css={{ gridColumn: 5 }}>
          Near
        </div>
        <div className="header" css={{ gridColumn: 6 }}>
          Long
        </div>
        <div className="header" css={{ gridColumn: 7 }}>
          Notes
        </div>

        {
          sortEntitiesByName(items).map((item) => (
            <WeaponRow key={item.id} weapon={item}/>
          ))
        }
      </div>
    </div>
  );
};
