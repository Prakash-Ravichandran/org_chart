import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { describe, it } from "vitest";
import { Search } from "../src/components/Search";

describe("Input value", () => {
  it("updates on change", () => {
    const setSearch = jest.fn((value) => {});

    const { queryByPlaceholderText } = render(<Search setSearch={setSearch} />);

    const searchInput = queryByPlaceholderText("Search an Employee...");

    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(searchInput.value).toBe("test"); // OR
    expect(setSearch).toHaveBeenCalledWith("test");
  });
});
