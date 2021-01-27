/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { Fragment, useCallback, useState } from "react";
import { TrailItem } from "../../module/TrailItem";
type WeaponRowProps = {
  weapon: TrailItem,
};

export const WeaponRow: React.FC<WeaponRowProps> = ({
  weapon,
}) => {
  const [hover, setHover] = useState(false);
  const onMouseOver = useCallback(() => { setHover(true); }, []);
  const onMouseOut = useCallback(() => { setHover(false); }, []);

  return (
    <Fragment>
    <a
      css={{ gridColumn: 1 }}
      className={hover ? "hover" : ""}
      onClick={() => weapon.sheet.render(true)}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {weapon.name}
    </a>
    <a
      css={{ gridColumn: 2 }}
      className={hover ? "hover" : ""}
      onClick={() => weapon.sheet.render(true)}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {weapon.getter("damage")()}
    </a>
    <a
      css={{ gridColumn: 3 }}
      className={hover ? "hover" : ""}
      onClick={() => weapon.sheet.render(true)}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {weapon.getter("pointBlankRange")()}
    </a>
    <a
      css={{ gridColumn: 4 }}
      className={hover ? "hover" : ""}
      onClick={() => weapon.sheet.render(true)}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {weapon.getter("closeRange")()}
    </a>
    <a
      css={{ gridColumn: 5 }}
      className={hover ? "hover" : ""}
      onClick={() => weapon.sheet.render(true)}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {weapon.getter("nearRange")()}
    </a>
    <a
      css={{ gridColumn: 6 }}
      className={hover ? "hover" : ""}
      onClick={() => weapon.sheet.render(true)}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {weapon.getter("longRange")()}
    </a>
    <a
      css={{ gridColumn: 7, overflow: "hidden", textOverflow: "ellipsis" }}
      className={hover ? "hover" : ""}
      onClick={() => weapon.sheet.render(true)}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {weapon.getter("notes")()}
    </a>
  </Fragment>
  );
};
