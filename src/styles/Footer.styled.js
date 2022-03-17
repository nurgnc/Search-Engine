import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8rem;
  background-color: rgba(32, 64, 128, 1);
  color: #fff;
  & > h6 {
    font-size: 18px;
    font-weight: 600;
    margin-right: 15px;
  }
  & > a {
    color: #fff;
    margin-left: 10px;
  }
`;
