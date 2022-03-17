import styled from "styled-components";

export const SearchButton = styled.button`
  background: ${(props) => props.bgColor};
  border: none;
  border-radius: 8px;
  padding: 12px 15px;
  width: 138px;
  cursor: pointer;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
