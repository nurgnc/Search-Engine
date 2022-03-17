import React, { useContext } from "react";
// context
import { MainContext } from "../contexts/MainContextProvider";
// css
import { Flex } from "../styles/baseStyles";
import { Paginate, PageButton } from "../styles/Pagination";

function Pagination() {
  const { paginate, currentPage, totalPageNumber } = useContext(MainContext);
  const pageNumbers = [];

  for (let i = 1; i <= totalPageNumber; i += 1) {
    if (i === 4 && totalPageNumber === 7) {
      pageNumbers.push(-1);
      i = totalPageNumber - 3;
    }
    pageNumbers.push(i);
  }

  return (
    <Flex flexDirection="row" align="center" justify="center">
      <Paginate>
        <li>
          <PageButton
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
          >
            Previous
          </PageButton>
        </li>
        {pageNumbers.map((number, index) => {
          return (
            <li key={number}>
              <PageButton
                type="button"
                active={currentPage === number ? "active" : ""}
                onClick={() => paginate(number)}
              >
                {number}
              </PageButton>
            </li>
          );
        })}
        <li>
          <PageButton
            disabled={currentPage === totalPageNumber}
            onClick={() => paginate(currentPage + 1)}
          >
            Next
          </PageButton>
        </li>
      </Paginate>
    </Flex>
  );
}

export default Pagination;
