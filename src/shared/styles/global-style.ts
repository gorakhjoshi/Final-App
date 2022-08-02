import { createGlobalStyle } from "styled-components";
import { Colors } from "shared/styles/colors";

export const GlobalStyle = createGlobalStyle`
  body {
    color:${Colors}
  }
`;
