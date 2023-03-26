import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";

const router = createBrowserRouter([
  { path: `/${import.meta.env.VITE_BASENAME}/`, element: <Login /> },
  { path: `/${import.meta.env.VITE_BASENAME}/:language`, element: <Login /> },
  {
    path: `/${import.meta.env.VITE_BASENAME}/:language/login`,
    element: <Login />,
  },
]);

export default router;
