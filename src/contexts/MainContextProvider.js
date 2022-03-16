import React, { createContext, useState } from "react";
// data
import data from "../data/mockData.json";

export const MainContext = createContext();

export default function MainContextProvider({ children }) {
  // data
  const userData = data.data;
  const cols = data.cols;
  //search
  const [search, setSearch] = useState("");

  const value = {
    userData,
    cols,
    search,
    setSearch,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
