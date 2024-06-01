import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import { Home } from "./components/Home";
import TipCalculator from "./components/tipcalculator/TipCalculator";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [{ path: "/", element: <TipCalculator /> }],
    errorElement: <ErrorPage />,
  },
]);

export default function App() {
  // wrap Contexts around the router, here
  return <RouterProvider router={router} />;
}
