import styled from "styled-components";

export const UserContent = styled.div`
  padding: 15px 15px;
  border-bottom: 1px solid gray;
  &:hover {
    background: #c4c4c4;
    border-radius: 4px;
  }
`;

export const BoldText = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #484848;
`;

export const SmallText = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: rgba(104, 104, 104, 1);
`;
