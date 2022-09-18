import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --color-one: #020246;
    --color-two: #EFF0F7;
    --color-three: #F9FAFB;
    --color-four: rgba(0, 0, 0, 0.5);
  }
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    outline: none;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
`