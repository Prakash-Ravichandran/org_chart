import { useState } from "react";
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
  const {
    isDragging,
    listItems,
    setListItems,
    handleDragging,
    handleUpdateList,
  } = useDrapAndDrop(data);

  const [search, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    filterData(value);
  };

  const filterData = (search: String) => {
    const filteredData = data.filter(
      (employee) =>
        employee.name.toLowerCase().includes(search.toLowerCase()) ||
        employee.id === +search.toLowerCase() ||
        employee.designation.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filteredData);
    console.log(filteredData);
  };

  return (
    <>
      <div className="search-crypto">
        <input
          placeholder="Search an Employee..."
          value={search}
          onChange={handleInputChange}
        />
      </div>

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
              items={filteredData}
              isDragging={isDragging}
              handleDragging={handleDragging}
              handleUpdateList={handleUpdateList}
            />
          ))}
        </div>
      </Tree>
    </>
  );
};
