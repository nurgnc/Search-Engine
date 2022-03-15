import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
    background: #EFEFEF;
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
