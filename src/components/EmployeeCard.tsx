import React from "react";
import { EmployeeCardProps } from "../interfaces";
import { EmployeeCardConstants } from "./contants";

export const EmployeeCard = ({ data, handleDragging }: EmployeeCardProps) => {
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
      <span>{`${EmployeeCardConstants.designationLabel}: ${data.designation}`}</span>
      <span>{`${EmployeeCardConstants.reporterLabel}: ${data.reportsTo}`}</span>
    </div>
  );
};
