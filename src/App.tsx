import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Tournament } from "./pages/Tournament";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tournament",
    element: <Tournament />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
