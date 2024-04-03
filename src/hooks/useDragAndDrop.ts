import { useState } from "react";
import { Data, Managers } from "../interfaces";

export const useDrapAndDrop = (data: Data[]) => {
  const [isDragging, setIsDragging] = useState(false);
  const [listItems, setListItems] = useState<Data[]>(data);

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  const handleUpdateList = (id: number, reportsTo: Managers) => {
    let employeeCard = listItems.find((employee) => employee.id === id);

    if (employeeCard && employeeCard.reportsTo !== reportsTo) {
      employeeCard.reportsTo = reportsTo;
      setListItems((allEmployeeCards) => [
        employeeCard!,
        ...allEmployeeCards.filter((employee) => employee.id !== id),
      ]);
    }
  };

  return {
    isDragging,
    listItems,
    setListItems,
    handleDragging,
    handleUpdateList,
  };
};
