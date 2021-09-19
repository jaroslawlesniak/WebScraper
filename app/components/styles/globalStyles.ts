import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Roboto";
        src: url("/fonts/Roboto-Regular.ttf");
    }
    body {
        margin: 0;
        padding: 0;
        font-family: "Roboto";
    }
`;
 
export default GlobalStyle;
