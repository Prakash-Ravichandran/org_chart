import React, { useRef } from "react";
import { searchProps } from "../interfaces";

export const Search = ({ Value, handleInputChange }: searchProps) => {
  const inputRef = useRef<HTMLInputElement | null>();
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e);
  };
  return (
    <>
      <div className="choose-employee">
        <input
          placeholder="Search an Employee..."
          value={Value}
          onChange={handleSearchChange}
        />
      </div>
    </>
  );
};
