import Checkout from "./pages/checkout";
import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    text-decoration: none;
    list-style: none;
  }
  a, button{
    cursor: pointer;
  }
`

function App() {
  return (
    <>
      <Helmet>
        <link
          href="https://rsms.me/inter/inter.css"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle/>
      <Checkout/>
    </>
  );
}

export default App;
