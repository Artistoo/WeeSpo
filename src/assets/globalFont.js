import { createGlobalStyle } from "styled-components";
import Raleway from "../assets/Raleway.ttf";

const GlobalFonts = createGlobalStyle`
@font-face {
  font-family: 'raleway';
  src: local(''),
       url('${Raleway}') format('ttf'),
}
`;

export default GlobalFonts;