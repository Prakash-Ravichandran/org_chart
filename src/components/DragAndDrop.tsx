import { data } from "../assets";
import { useDrapAndDrop } from "../hooks/useDragAndDrop";
import { Status } from "../interfaces";
import { ContainerCards } from "./ContainerCards";

const typesHero: Status[] = ["good", "normal", "bad"];

export const DragAndDrop = () => {
  const { isDragging, listItems, handleDragging, handleUpdateList } =
    useDrapAndDrop(data);

  return (
    <div className="grid">
      {typesHero.map((container) => (
        <ContainerCards
          status={container}
          key={container}
          items={listItems}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
      ))}
    </div>
  );
};
