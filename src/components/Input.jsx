import React, { useContext } from "react";
// context
import { MainContext } from "../contexts/MainContextProvider";

function Input() {
  const { setSearch, search } = useContext(MainContext);

  return (
    <input
      placeholder="Search by name surmane, email and country"
      type="search"
      value={search}
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
    />
  );
}

export default Input;
