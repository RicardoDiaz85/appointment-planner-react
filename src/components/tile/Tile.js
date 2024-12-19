// Tile.js
import React from "react";

const Tile = ({ name, description }) => {
  return (
    <div>
      <p className="tile-title">{name}</p>
      {Object.values(description).map((value, index) => (
        <p key={index} className="tile">{value}</p>
      ))}
    </div>
  );
};

export default Tile; // Ensure Tile is exported as default
