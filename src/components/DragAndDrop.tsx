import React, { useRef, useState } from "react";
import { Tree } from "react-organizational-chart";
import styled from "styled-components";
import { data } from "../assets";
import { useDrapAndDrop } from "../hooks/useDragAndDrop";
import { Status } from "../interfaces";
import { ContainerCards } from "./ContainerCards";
import Dropdown from "./Dropdown";
import { Search } from "./Search";

const typesHero: Status[] = ["Thomas Frank", "Mark Robins", "Mikel Arteta"];

const StyledNode = styled.div`
  display: inline-block;
  margin-top: 10px;
  background-color: #f9e7e7;
  color: #000000;
  font-weight: bold;
  font-size: 1.2rem;
  border: 2px solid #ff3a3a33;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  animation: fadeIn 0.3s ease-in-out;
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
  const [category, setCatergory] = useState(""); // state for dropdown
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCatergory(() => "");
    setSearchTerm(value);
    filterData(value);
  };

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchTerm(() => "");
    setCatergory(e.target.value);
    filterData(e.target.value);
  };

  const filterData = (search: String) => {
    const filteredData = data.filter(
      (employee) =>
        employee.name.toLowerCase().includes(search.toLowerCase()) ||
        employee.id === +search.toLowerCase() ||
        employee.designation.toLowerCase().includes(search.toLowerCase()) ||
        employee.status.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  return (
    <>
      <div className="flex-container">
        <Search Value={search} handleInputChange={handleInputChange} />
        <Dropdown options={data} onChange={handleDropdownChange} />
      </div>
      <Tree
        lineHeight="55px"
        lineWidth={"3px"}
        lineColor={"#ff3a3a"}
        lineBorderRadius={"10px"}
        label={
          <StyledNode>
            <span>
              <img
                src={
                  "https://bumbeishvili.github.io/avatars/avatars/portrait48.png"
                }
                alt="Manager"
              />
            </span>
            <p>{"William HallBerg"}</p>
            <span className="ceo-designation">{"Chief Executive Officer"}</span>
          </StyledNode>
        }
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
