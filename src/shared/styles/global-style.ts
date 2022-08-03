import { createGlobalStyle } from "styled-components";
import { Colors } from "shared/styles/colors";
import { FontSize } from "shared/styles/styles";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color:${Colors.blue.darker};
    background-color: ${Colors.neutral.lighter};
    font-size: ${FontSize.u4};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
