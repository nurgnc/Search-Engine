import React, { useContext } from "react";
// context
import { MainContext } from "../contexts/MainContextProvider";

function Results() {
  const { search } = useContext(MainContext);
  return (
    <div>
      <h1>Results</h1>
    </div>
  );
}

export default Results;
