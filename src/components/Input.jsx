import React, { useContext } from "react";
// context
import { MainContext } from "../contexts/MainContextProvider";
// css
import { SearchInput } from "../styles/Inputs.styled";

function Input({ width }) {
  const { setSearch, search } = useContext(MainContext);

  // function onChangeTagInput(e) {
  //   console.log(e.target.value.match(/[^a-zA-Z\d.]/gi, ""));
  // }

  // console.log(search);
  return (
    <SearchInput
      placeholder="Search by name surmane, email and country"
      type="search"
      value={search}
      width={width}
      aria-label="search-input"
      pattern="[A-Za-z]"
      title="search only name surmane, email and country"
      onChange={(e) => {
        setSearch(e.target.value.toLowerCase());
        // onChangeTagInput(e);
      }}
    />
  );
}

export default Input;
