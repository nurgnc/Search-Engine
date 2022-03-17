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
  let searchResult = [];
  search &&
    userData.forEach((data) => {
      let searchArr = [data[0], data[2], data[4]].filter(
        (searchItem) => searchItem.toLowerCase().includes(search) && [...data]
      );
      searchArr.length > 0 && searchResult.push([...data]);
    });

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(6);
  const totalUsers = searchResult?.length;
  const totalPageNumber = Math.ceil(totalUsers / usersPerPage);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const value = {
    userData,
    searchResult,
    cols,
    search,
    setSearch,
    currentPage,
    paginate,
    usersPerPage,
    totalUsers,
    totalPageNumber,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
