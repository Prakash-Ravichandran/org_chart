import { useState } from "react";
import { Data, Managers } from "../interfaces";

export const useDrapAndDrop = (data: Data[]) => {
  const [isDragging, setIsDragging] = useState(false);
  const [listItems, setListItems] = useState<Data[]>(data);

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  const handleUpdateList = (id: number, reportsTo: Managers) => {
    let card = listItems.find((item) => item.id === id);

    if (card && card.reportsTo !== reportsTo) {
      card.reportsTo = reportsTo;
      setListItems((prev) => [card!, ...prev.filter((item) => item.id !== id)]);
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
