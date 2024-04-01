import React from "react";
import { Data } from "../interfaces";

interface Props {
  data: Data;
  handleDragging: (dragging: boolean) => void;
}

export const EmployeeCard = ({ data, handleDragging }: Props) => {
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
