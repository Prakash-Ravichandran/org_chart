import { useState } from "react";
import { data } from "../assets";
import { Status } from "../interfaces";
import { ContainerCards } from "./ContainerCards";

const typesHero: Status[] = ["good", "normal", "bad"];

export const DragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  return (
    <div className="grid">
      {typesHero.map((container) => (
        <ContainerCards
          status={container}
          key={container}
          items={data}
          isDragging={isDragging}
          handleDragging={handleDragging}
        />
      ))}
    </div>
  );
};
