import styled from "styled-components";

export const SearchInput = styled.input`
  width: ${(props) => props.width};
  padding: 10px 15px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  border-radius: 8px;
  background: #ffffff;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;
  &:hover {
    background: rgba(100, 100, 100, 0.08);
    border: 2px solid rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
    border-radius: 8px;
  }
  & > input:invalid {
    border-color: red;
  }
`;
