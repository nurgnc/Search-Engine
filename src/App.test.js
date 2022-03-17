import React from "react";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
// router
import { BrowserRouter, Router } from "react-router-dom";
// components
import App from "./App";
import { Results } from "./pages";
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

test("results page", () => {
  const history = createMemoryHistory();
  const route = "/results";
  const searchValue = { search: "turkey" };
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
