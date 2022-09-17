import { createBrowserRouter } from "react-router-dom";
import { Checkout } from "../Pages/Checkout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Checkout/>,
  },
]);