import React from "react";
import { DropdownProps } from "../interfaces";

// interface DropdownProps {
//   options: Array<{
//     id: number;
//     name: String;
//     designation: String;
//     status: String;
//   }>;
//   onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
// }

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

  //   let result = options.map(({ designation }) => designation)

  return (
    <>
      <select onChange={handleSelectChange}>
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
