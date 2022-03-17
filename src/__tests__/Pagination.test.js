import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// component
import { Pagination } from "../components";
// context
import { MainContext } from "../contexts/MainContextProvider";

test("Initial previous button is disable", () => {
  const pageNum = { currentPage: 1 };
  render(
    <MainContext.Provider value={pageNum}>
      <Pagination />
    </MainContext.Provider>
  );
  const previousBtn = screen.getByTestId("previous-btn");
  expect(previousBtn).toBeDisabled();
});

test("Next button is disable while last page ", () => {
  const pageNum = { currentPage: 16, totalPageNumber: 16 };

  render(
    <MainContext.Provider value={pageNum}>
      <Pagination />
    </MainContext.Provider>
  );

  const nextBtn = screen.getByTestId("next-btn");

  expect(nextBtn).toBeDisabled();
});

// test("previous and next button working correctly", () => {
//   const pageNum = {
//     currentPage: 5,
//     paginate: jest.fn(),
//   };
//   render(
//     <MainContext.Provider value={pageNum}>
//       <Pagination />
//     </MainContext.Provider>
//   );
//   const previousBtn = screen.getByTestId("previous-btn");
//   const nextBtn = screen.getByTestId("next-btn");

//   // click on previous button
//   // const wrapper = shallow(<Pagination/>);
//   userEvent.click(previousBtn);
//   // console.log(wrapper.state().)
//   expect().toEqual(4);
// });
