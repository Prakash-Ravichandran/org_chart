import { TreeNode } from "react-organizational-chart";
import styled from "styled-components";
import { ManagerCardProps } from "../interfaces";
import { ManagerCardConstants } from "./contants";
import { EmployeeCard } from "./EmployeeCard";

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

export const ManagerCard = ({
  items = [],
  status,
  isDragging,
  handleDragging,
  handleUpdateList,
}: ManagerCardProps) => {
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
              <img src={`${ManagerCardConstants.image}`} />
            </span>
            <p>{status}</p>
            <span>{`${ManagerCardConstants.designationLabel}: ${ManagerCardConstants.designation}`}</span>
          </StyledNode>
        }
      >
        <TreeNode
          label={
            <div className="employee-overflow">
              {items.map(
                (item) =>
                  status === item.status && (
                    <EmployeeCard
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
