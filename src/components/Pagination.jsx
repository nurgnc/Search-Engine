import React, { useContext } from "react";
// context
import { MainContext } from "../contexts/MainContextProvider";
// css
import { Flex } from "../styles/baseStyles";
import { Paginate } from "../styles/Pagination";

function Pagination() {
  const { totalUsers, usersPerPage, paginate, currentPage } =
    useContext(MainContext);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i += 1) {
    pageNumbers.push(i);
  }
  return (
    <Flex flexDirection="row" align="center" justify="center">
      <Paginate>
        <li>
          <button onClick={() => paginate(currentPage - 1)}>Previous</button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              type="button"
              active={currentPage === number ? "active" : ""}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button onClick={() => paginate(currentPage + 1)}>Next</button>
        </li>
      </Paginate>
    </Flex>
  );
}

export default Pagination;
