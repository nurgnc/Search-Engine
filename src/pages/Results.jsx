import React, { useContext, useEffect, useState } from "react";
// context
import { MainContext } from "../contexts/MainContextProvider";
// route
import { Link } from "react-router-dom";
// components
import { Button, Input, UserCard } from "../components";
import Pagination from "../components/Pagination";
// logo img
import logo from "../assets/logo.png";
// css
import { Container, Flex, Margin, MarginVertical } from "../styles/baseStyles";

function Results() {
  const { search, searchResult, currentPage, usersPerPage, totalUsers } =
    useContext(MainContext);
  const [select, setSelect] = useState("none");
  const [resultData, setResultData] = useState([...searchResult]);

  // get current movies
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const orderOperations = {
    "name-asc": (list) => list.sort(),
    "name-desc": (list) => list.sort().reverse(),
    "year-asc": (list) =>
      list.sort(function (a, b) {
        return a[3].split("/")[2] - b[3].split("/")[2];
      }),
    "year-desc": (list) =>
      list.sort(function (a, b) {
        return b[3].split("/")[2] - a[3].split("/")[2];
      }),
  };

  useEffect(() => {
    if (select == "none") {
      return;
    }

    let list = [...searchResult];

    orderOperations[select](list);
    setResultData(list);
  }, [select]);

  useEffect(() => {
    setResultData(searchResult);
  }, [searchResult]);

  return (
    <Container>
      <Margin mb="2.5rem">
        <Flex flexDirection="row" align="center" justify="space-around">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <Input width="60%" />
          <Link to={search ? "/results" : ""}>
            <Button bgColor="#4F75C2" />
          </Link>
        </Flex>
      </Margin>
      <Flex flexDirection="row" align="center" justify="flex-end">
        <select name="Order By" onChange={(e) => setSelect(e.target.value)}>
          <option value="none">Select by order</option>
          <option value="name-asc">Name ascending</option>
          <option value="name-desc">Name descending</option>
          <option value="year-asc">Year ascending</option>
          <option value="year-desc">Year descending</option>
        </select>
      </Flex>
      <MarginVertical>
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
      </MarginVertical>
      {totalUsers > 3 && <Pagination />}
    </Container>
  );
}

export default Results;
