import { Tree } from "react-organizational-chart";
import styled from "styled-components";
import { data } from "../assets";
import { useDrapAndDrop } from "../hooks/useDragAndDrop";
import { Status } from "../interfaces";
import { ContainerCards } from "./ContainerCards";

const typesHero: Status[] = ["Thomas Frank", "Mark Robins", "Mikel Arteta"];

const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 1px solid white;
`;

export const DragAndDrop = () => {
  const { isDragging, listItems, handleDragging, handleUpdateList } =
    useDrapAndDrop(data);

  return (
    <Tree
      lineHeight="55px"
      lineWidth={"3px"}
      lineColor={"white"}
      lineBorderRadius={"10px"}
      label={<StyledNode>{"William HallBerg"} </StyledNode>}
    >
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
    </Tree>
  );
};
