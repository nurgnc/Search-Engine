import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
// router
import { BrowserRouter, Router } from "react-router-dom";
// components
import App from "./App";
import { Home, Results } from "./pages";
// context
import { MainContext } from "./contexts/MainContextProvider";

test("home page", () => {
  const history = createMemoryHistory();
  const route = "/";
  history.push(route);
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(history.location.pathname).toBe("/");
});

const searchValue = { search: "turkey", searchResult: ["Turkey"] };

test("results page", () => {
  const history = createMemoryHistory();
  const route = "/results";
  history.push(route);

  render(
    <MainContext.Provider value={searchValue}>
      <Router location={history.location} navigator={history}>
        <Results />
      </Router>
    </MainContext.Provider>
  );

  expect(history.location.pathname).toBe("/results");
});

test("show more link is correct routing", () => {
  const history = createMemoryHistory();
  const route = "/";
  history.push(route);

  render(
    <MainContext.Provider value={searchValue}>
      <Router location={history.location} navigator={history}>
        <Home />
      </Router>
    </MainContext.Provider>
  );
  const showMoreLink = screen.getByTestId("showMore-link");

  userEvent.click(showMoreLink);
  expect(history.location.pathname).toBe("/results");
});
