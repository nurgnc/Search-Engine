import styled from "styled-components";

export const Select = styled.div`
  position: relative;
  display: flex;
  // width: 10em;
  height: 2em;
  border-radius: 0.25em;
  overflow: hidden;
  & select {
    appearance: none;
    outline: 0;
    border: 0;
    box-shadow: none;
    flex: 1;
    padding: 0 1em;
    color: #484848;
    background-color: #fff;
    cursor: pointer;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    &:focus-visible,
    &:focus {
      background: #c4c4c4;
      border-radius: 4px;
      color: #fff;
    }
  }
`;
