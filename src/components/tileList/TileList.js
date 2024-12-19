import React from "react";
import Tile from "../tile/Tile";

const TileList = ({ items = [] }) => {
  return (
    <div>
      {items.map(({ name, ...rest }, index) => (
        <Tile key={index} name={name} description={rest} />
      ))}
    </div>
  );
};

export default TileList;
