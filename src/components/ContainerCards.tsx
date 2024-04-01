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
  display: inline-block;
  background: #f9e7e7;
  border: 3px solid #ff3a3a33;
  border-radius: 8px;
  color: #000000;
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 10px;
  padding: 10px;
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

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className={`layout-cards ${isDragging ? "layout-dragging" : ""}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <TreeNode
        label={
          <StyledNode>
            <span>
              <img
                src={
                  "https://bumbeishvili.github.io/avatars/avatars/portrait14.png"
                }
              />
            </span>
            <p>{status}</p>
            <span>Manager</span>
          </StyledNode>
        }
      >
        <TreeNode
          label={
            <div className="employee-overflow">
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
    </div>
  );
};
