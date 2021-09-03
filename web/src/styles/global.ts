import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    font-family: 'Quicksand', sans-serif;
  }

  body { 
    min-height: 100vh;
    width: 100%;
  }
`;

export default GlobalStyle;
