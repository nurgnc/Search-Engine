import { render, fireEvent, screen } from "@testing-library/react";
// component
import { Button } from "../components";

beforeEach(() => {
  render(<Button />);
});

test("button renders with correct text", () => {
  const button = screen.getByTestId("search-button");
  expect(button).toHaveTextContent("Search");
});

test("button type is correct type", () => {
  const button = screen.getByTestId("search-button");

  expect(button.type).toBe("button");
});
