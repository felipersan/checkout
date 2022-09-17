import { router } from "./Routes";
import { RouterProvider } from "react-router-dom";
import { StrictMode } from "react";

function App() {
  return (
    <div className="App">
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </div>
  );
}

export default App;
