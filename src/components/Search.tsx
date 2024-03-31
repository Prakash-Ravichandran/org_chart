import React, { useRef } from "react";

interface searchProps {
  Value: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ Value, handleInputChange }: searchProps) => {
  const inputRef = useRef<HTMLInputElement | null>();
  //   const [focusInput, setFocusInput] = useFocus();

  //   useEffect(() => {
  //     // Focus the input element when the component mounts
  //     if (focusInput.current) {
  //       focusInput.current.focus();
  //     }
  //   }, []);

  console.log("inside Search");
  console.log(handleInputChange);
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
          //   ref={focusInput}
        />
      </div>
    </>
  );
};