import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Dropdown from "../src/components/Dropdown";
import { Search } from "../src/components/Search";

const options = [
  { designation: "Accountant" },
  { designation: "Programmer" },
  { designation: "Finance Officer" },
  { designation: "Chief Accountant" },
  { designation: "Client Representative" },
];

describe("Testing Organizational Chart", () => {
  it("Search Component is rendering", () => {
    <Search></Search>;
  });
  it("Placeholder is present", () => {
    const { queryByPlaceholderText } = render(<Search />);
    const searchInput = queryByPlaceholderText("Search an Employee...");
    expect(searchInput.value).toBe("");
  });
  it("Dropdown Component is rendering", () => {
    <Dropdown></Dropdown>;
  });
  it("Option is present", () => {
    render(<Dropdown options={options} defaultValue={"Accountant"} />);
    expect(screen.getByRole("option", { name: "Accountant" }).selected).toBe(
      true
    );
  });
});
