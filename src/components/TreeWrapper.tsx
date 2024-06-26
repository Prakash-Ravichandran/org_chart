import React, { useState } from "react";
import { Tree } from "react-organizational-chart";
import styled from "styled-components";
import { data } from "../assets";
import { useDnD } from "../hooks/useDnD";
import { Managers } from "../interfaces";
import { TreeWrapperConstants } from "./contants";
import Dropdown from "./Dropdown";
import { ManagerCard } from "./ManagerCard";
import { Search } from "./Search";

const reportingManagers: Managers[] = [
  "Thomas Frank",
  "Mark Robins",
  "Mikel Arteta",
];

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

export const TreeWrapper = () => {
  const {
    isDragging,
    listEmployees,
    setListEmployees,
    handleDragging,
    handleUpdateList,
  } = useDnD(data);

  const [search, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [category, setCatergory] = useState(""); // state for dropdown

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
        employee.reportsTo.toLowerCase().includes(search.toLowerCase())
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
              <img src={`${TreeWrapperConstants.image}`} alt="Manager" />
            </span>
            <p>{`${TreeWrapperConstants.name}`}</p>
            <span className="ceo-designation">
              {`${TreeWrapperConstants.designationLabel}:${TreeWrapperConstants.designation}`}
            </span>
          </StyledNode>
        }
      >
        <div className="grid">
          {reportingManagers.map((manager) => (
            <ManagerCard
              reportsTo={manager}
              key={manager}
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
