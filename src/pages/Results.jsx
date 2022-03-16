import React, { useContext, useEffect, useState } from "react";
// context
import { MainContext } from "../contexts/MainContextProvider";
// route
import { Link } from "react-router-dom";
// components
import { Button, Input, UserCard } from "../components";
// logo img
import logo from "../assets/logo.png";
import Pagination from "../components/Pagination";

function Results() {
  const { search, searchResult, currentPage, usersPerPage } =
    useContext(MainContext);
  const [select, setSelect] = useState();
  const [resultData, setResultData] = useState(searchResult);
  console.log("resultData::::", resultData);

  // get current movies
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  useEffect(() => {
    if (select === "name-asc") {
      let nameAsc = searchResult.sort();
      setResultData(nameAsc);
    } else if (select === "name-desc") {
      let nameDesc = searchResult.sort().reverse();
      setResultData(nameDesc);
    } else if (select === "year-asc") {
      let yearAsc = searchResult.sort(function (a, b) {
        return a - b;
      });
      setResultData(yearAsc);
    } else if (select === "year-desc") {
      let yearDesc = searchResult.sort(function (a, b) {
        return b - a;
      });
      setResultData(yearDesc);
    } else setResultData(resultData);
  }, [select]);

  // console.log("searchResult::::", searchResult);
  return (
    <div>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div>
        <Input />
        <Link to={search ? "/results" : ""}>
          <Button />
        </Link>
      </div>
      <div>
        <select name="Order By" onChange={(e) => setSelect(e.target.value)}>
          <option value="none">Select by order</option>
          <option value="name-asc">Name ascending</option>
          <option value="name-desc">Name descending</option>
          <option value="year-asc">Year ascending</option>
          <option value="year-desc">Year descending</option>
        </select>
      </div>
      <div>
        {resultData
          .slice(indexOfFirstUser, indexOfLastUser)
          .map((item, index) => (
            <UserCard
              key={index}
              name={item[0]}
              email={item[2]}
              date={item[3]}
              country={item[4]}
              city={item[5]}
            />
          ))}
      </div>
      <Pagination />
    </div>
  );
}

export default Results;
