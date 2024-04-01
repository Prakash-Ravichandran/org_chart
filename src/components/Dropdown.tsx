import React from "react";

interface DropdownProps {
  options: Array<{
    id: number;
    name: String;
    designation: String;
    status: String;
  }>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onChange }) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e);
  };

  //   function getUniqueListBy(
  //     arr: Array<{
  //       id: number;
  //       name: String;
  //       designation: String;
  //       status: String;
  //     }>,
  //     key: Array<{
  //       id: number;
  //       name: String;
  //       designation: String;
  //       status: String;
  //     }>
  //   ) {
  //     return [...new Map(arr.map((item) => [item[key], item])).values()];
  //   }

  //   console.log(getUniqueListBy(options, "designation"));

  return (
    <>
      <select onChange={handleSelectChange}>
        {/* <option value={"Choose an Employee"}>
          {"Choose by Designation ..."}
        </option> */}
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.designation}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
