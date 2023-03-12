import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #0D0D0D;
    --bright: rgba(150, 150, 150, 0.1);
    --shadow: rgba(0, 0, 0, 0.2);
    --shadow-100: rgba(0, 0, 0, 0.4);
    --shadow-200: rgba(0, 0, 0, 0.6);
    --shadow-300: rgba(0, 0, 0, 0.8);
    
    --white: #fffafa;
    
    --dark-purple: #1e1b2c;
    

    --purple: #2F3273;
    --violet: #636AF2;

    --orange: #F63E02;


    --navbar-content-size: 2.4rem;
    --navbar-spacing: 3rem;

    --container-padding: 4rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default GlobalStyles;
