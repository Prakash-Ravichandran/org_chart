import { TreeNode } from "react-organizational-chart";
import styled from "styled-components";
import { Data, Status } from "../interfaces";
import { CardItem } from "./CardItem";

interface Props {
  items: Data[];
  status: Status;
  isDragging: boolean;
  handleUpdateList: (id: number, status: Status) => void;
  handleDragging: (dragging: boolean) => void;
}

const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid white;
`;

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
      <TreeNode label={<StyledNode>{status} </StyledNode>}>
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
      </TreeNode>

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
