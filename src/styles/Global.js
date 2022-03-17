import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&family=Roboto:wght@400;500;700&display=swap');
  * {
    font-family : "Roboto";
    box-sizing: border-box;
  }
  body {
    font-size: 1.15em;
    margin: 0;
  }
  img {
    max-width: 100%;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
}
`;

export default GlobalStyles;
