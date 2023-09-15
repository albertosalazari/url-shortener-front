import { createGlobalStyle } from 'styled-components';

export const GlobalCss = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
  }
  
  html, body, .vsc-initialized, #root {
    height: 100%;
    width: 100%;
  }

  ul, li {
  list-style: none;
  }

  button {
    cursor: pointer;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: transparent; 
  }
  
  ::-webkit-scrollbar-thumb {
    background: #0b9cd8;
    border-radius: 15px;
    
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgb(0,0,0,0.8);
  }
`;
