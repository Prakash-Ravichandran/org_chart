import { Tree, TreeNode } from "react-organizational-chart";
import { Data, Status } from "../interfaces";
import { CardItem } from "./CardItem";

interface Props {
  items: Data[];
  status: Status;
  isDragging: boolean;
  handleUpdateList: (id: number, status: Status) => void;
  handleDragging: (dragging: boolean) => void;
}

// interface TreeProps{
//   label: Element
// }

export const ContainerCards = ({
  items = [],
  status,
  isDragging,
  handleDragging,
  handleUpdateList,
}: Props) => {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleUpdateList(+e.dataTransfer.getData("text"), status);
    handleDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
    e.preventDefault();

  return (
    <div
      className={`layout-cards ${isDragging ? "layout-dragging" : ""}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {/* <img
        src={"https://bumbeishvili.github.io/avatars/avatars/portrait20.png"}
        alt="manager"
      ></img> */}

      <Tree
        lineHeight="50px"
        lineWidth={"3px"}
        lineColor={"green"}
        lineBorderRadius={"10px"}
        label={<p>{status} </p>}
      >
        <TreeNode
          label={
            <div>
              {" "}
              {items.map(
                (item) =>
                  status === item.status && (
                    <CardItem
                      data={item}
                      key={item.id}
                      handleDragging={handleDragging}
                    />
                  )
              )}
            </div>
          }
        ></TreeNode>
      </Tree>

      {/* <p>{status} </p>
      {items.map(
        (item) =>
          status === item.status && (
            <CardItem
              data={item}
              key={item.id}
              handleDragging={handleDragging}
            />
          )
      )} */}
    </div>
  );
};
