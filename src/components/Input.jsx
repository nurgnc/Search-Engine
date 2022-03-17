import React, { useContext } from "react";
// context
import { MainContext } from "../contexts/MainContextProvider";
// css
import { SearchInput } from "../styles/Inputs.styled";

function Input({ width }) {
  const { setSearch, search } = useContext(MainContext);

  return (
    <SearchInput
      placeholder="Search by name surmane, email and country"
      type="search"
      value={search}
      width={width}
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
    />
  );
}

export default Input;
