import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Tournament } from "./pages/Tournament";
import { Param } from "./pages/Param";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tournament",
    element: <Tournament />,
  },
  {
    path: "/param",
    element: <Param />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
