import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
// component
import { Input } from "../components";
// context
import { MainContext } from "../contexts/MainContextProvider";

const searchValue = { search: "turkey" };

beforeEach(() => {
  render(
    <MainContext.Provider value={searchValue}>
      <Input />
    </MainContext.Provider>
  );
});

test("search input controlled placeholder", () => {
  const input = screen.getByLabelText("search-input");

  expect(input.placeholder).toBe("Search by name surmane, email and country");
});

test("search value is equal to input value", () => {
  const input = screen.getByLabelText("search-input");

  expect(input.value).toBe("turkey");
});

test("search type", () => {
  const input = screen.getByLabelText("search-input");

  expect(input.type).toBe("search");
});
