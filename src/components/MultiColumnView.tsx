import React from "react";
import ArtworkCard from "./ArtworkCard";

export const MultiColumnView = ({ components, items = 1}) => {
  const rows = [];
  let currentRow = [];

  components.forEach((item, index) => {
    currentRow.push(
      <div key={index}>
        <ArtworkCard details={item}/>
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
            <div key={colIndex} style={{ flex: "1", margin: "8px" }}>
              {component}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
