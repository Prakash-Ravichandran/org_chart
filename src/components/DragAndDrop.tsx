import { Status } from "../interfaces";
import { ContainerCards } from "./ContainerCards";

const typesHero: Status[] = ["good", "normal", "bad"];

export const DragAndDrop = () => {
  return (
    <div className="grid">
      {typesHero.map((container) => (
        <ContainerCards status={container} key={container} />
      ))}
    </div>
  );
};
