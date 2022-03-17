import styled from "styled-components";

export const Paginate = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style: none;
  width: 100%;
  padding-left: 0;
  margin-top: 2rem;
`;

export const PageButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #484848;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => (props.active === "active" ? "#fff" : "#484848")};
  background: ${(props) => (props.active === "active" ? "#204080" : "#fff")};
  margin: 0 0.5rem;
  font-weight: 600;
  &:hover {
    background: #4f75c2;
    color: #fff;
  }
`;
