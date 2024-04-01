import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Search } from "../src/components/Search";

describe("Testing a Search Component", () => {
  it("Search Component is rendering", () => {
    <Search></Search>;
  });
  it("Placeholder is present", () => {
    const { queryByPlaceholderText } = render(<Search />);
    const searchInput = queryByPlaceholderText("Search an Employee...");
    expect(searchInput.value).toBe("");
  });
});

// Check if the input field is present
