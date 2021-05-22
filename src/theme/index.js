import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

 * {
  margin: 0 ;
  padding: 0 ;
  box-sizing: border-box;
  outline: none;
  font-family: 'Roboto';
  overflow-x: hidden;
}

body {
  ${"" /* overflow: hidden; */}
}
`;

export const theme = {
  colors: {
    white: "#fff",
    text: "#393D43",
  },
};
