import React, { useContext } from "react";
// context
import { MainContext } from "../contexts/MainContextProvider";
// css
import { Flex, Margin } from "../styles/baseStyles";
import { Paginate, PageButton } from "../styles/Pagination";

function Pagination() {
  const { paginate, currentPage, totalPageNumber } = useContext(MainContext);
  const pageNumbers = [];

  for (let i = 1; i <= totalPageNumber; i += 1) {
    pageNumbers.push(i);
  }

  return (
    <Flex flexDirection="row" align="center" justify="center">
      <Paginate>
        <li>
          <PageButton
            disabled={currentPage === 1}
            data-testid="previous-btn"
            onClick={() => paginate(currentPage - 1)}
          >
            Previous
          </PageButton>
        </li>
        {pageNumbers
          .slice(currentPage - 1, currentPage + 2)
          .map((number, index) => {
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

        {currentPage !== totalPageNumber && currentPage < totalPageNumber - 4 && (
          <>
            <Margin mr="0.5rem" ml="0.5rem">
              ...
            </Margin>
            {pageNumbers
              .slice(totalPageNumber - 3, totalPageNumber + 1)
              .map((number, index) => {
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
          </>
        )}

        <li>
          <PageButton
            disabled={currentPage === totalPageNumber}
            onClick={() => paginate(currentPage + 1)}
            data-testid="next-btn"
          >
            Next
          </PageButton>
        </li>
      </Paginate>
    </Flex>
  );
}

export default Pagination;
