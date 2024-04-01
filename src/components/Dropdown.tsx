import React from "react";
import { DropdownProps } from "../interfaces";

const Dropdown: React.FC<DropdownProps> = ({ options, onChange }) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e);
  };

  const ids = options.map(({ designation }) => designation);
  const filtered = options.filter(
    ({ designation }, index) => !ids.includes(designation, index + 1)
  );

  return (
    <>
      <select onChange={handleSelectChange}>
        {filtered.map((option) => (
          <option key={option.id} value={option.id}>
            {option.designation}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
