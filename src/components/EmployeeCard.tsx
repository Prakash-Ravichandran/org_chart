import React from "react";
import { EmployeeProps } from "../interfaces";

export const EmployeeCard = ({ data, handleDragging }: EmployeeProps) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("Text", `${data.id}`);
    handleDragging(true);
  };
  const handleDragEnd = () => handleDragging(false);

  return (
    <div
      className="card-container"
      draggable
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <span>
        <img src={data.image} />
      </span>
      <p>{data.name}</p>
      <span>{`Designation: ${data.designation}`}</span>
      <span>{`Reports to: ${data.status}`}</span>
    </div>
  );
};
