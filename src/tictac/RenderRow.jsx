import React from "react";
import RenderCell from "./RenderCell";

const RenderRow = ({ row, index: y }) => {
  return (
    <div>
      {row.map((cell, index) => (
        <RenderCell key={index} value={cell} x={index} y={y} />
      ))}
    </div>
  );
};

export default RenderRow;
