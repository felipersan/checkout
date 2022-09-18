import { router } from "./Routes";
import { RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { StepProvider } from "./Contexts/Steps";
import { GlobalStyle } from "./Styles/globalStyle";

function App() {
  return (
    <div className="App">
      <div>
        <StrictMode>
          <StepProvider>
            <>
              <GlobalStyle/>
              <RouterProvider router={router} />
            </>
          </StepProvider>
        </StrictMode>
      </div>
    </div>
  );
}

export default App;
