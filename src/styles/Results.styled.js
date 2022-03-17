import styled from "styled-components";
import { Link } from "react-router-dom";

export const ResultField = styled.div`
  width: 90%;
  background: #ffffff;
  border: ${(props) => (props.active === "active" ? "1px solid #484848" : "")};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 1rem 2rem;
  margin-top: 1.5rem;
  overflow: hidden;
`;

export const ShowLinkContent = styled.div`
  margin-top: 1rem;
  text-align: center;
`;
export const ShowLink = styled(Link)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
`;
