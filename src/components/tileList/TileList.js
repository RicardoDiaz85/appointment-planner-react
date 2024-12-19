// Import React for building the component
import React from "react";

// Import the Tile component to render each item in the list
import Tile from "../tile/Tile";

// Stateless TileList component that receives an array of objects as a prop
const TileList = ({ items }) => {
  return (
    <div>
      {/* Map through the items array and render a Tile for each item */}
      {items.map(({ name, ...rest }, index) => (
        <Tile key={index} name={name} description={rest} />
      ))}
    </div>
  );
};

export default TileList;
