import { useState } from "react";
import { Data, Managers } from "../interfaces";

export const useDnD = (data: Data[]) => {
  const [isDragging, setIsDragging] = useState(false);
  const [listEmployees, setListEmployees] = useState<Data[]>(data);

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  const handleUpdateList = (id: number, reportsTo: Managers) => {
    let employeeCard = listEmployees.find((employee) => employee.id === id);

    if (employeeCard && employeeCard.reportsTo !== reportsTo) {
      employeeCard.reportsTo = reportsTo;
      setListEmployees((allEmployeeCards) => [
        employeeCard!,
        ...allEmployeeCards.filter((employee) => employee.id !== id),
      ]);
    }
  };

  return {
    isDragging,
    listEmployees,
    setListEmployees,
    handleDragging,
    handleUpdateList,
  };
};
