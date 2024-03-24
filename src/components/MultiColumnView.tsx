import React from "react";
import ArtworkCard from "./ArtworkCard";
import { log } from "console";

export const MultiColumnView = ({ components, items = 1 }) => {
  const rows = [];
  let currentRow = [];

  components.forEach((item, index) => {
    currentRow.push(
      <div key={index} className="mr-2">
        <ArtworkCard
          title={item?.artName}
          image={item?.artImage}
          artist={item?.artistName}
          amount={item?.bidPrice}
        />
      </div>
    );
    if (currentRow.length === items || index === components.length - 1) {
      rows.push(currentRow);
      currentRow = [];
    }

    if (rows.length > 0) {
      const lastRow = rows[rows.length - 1];
      if (lastRow.length < 4) {
        const lastItem = currentRow.pop();
        rows[rows.length - 1] = [...lastRow, lastItem];
      }
    }
  });

  return (
    <div>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" }}>
          {row.map((component, colIndex) => (
            <div key={colIndex} style={{ flex: "1", margin: "5px" }}>
              {component}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
