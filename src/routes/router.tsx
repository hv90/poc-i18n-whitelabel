import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../pages/login";
import NotFound from "../pages/notFound";

export const languages = ["en-us", "pt-br"];

const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: <Login />,
      errorElement: <NotFound />,
    },
    {
      path: `/:language/`,
      element: <Login />,
    },
    {
      path: `/:language/login/`,
      element: <Login />,
    },
    { path: `/:language/404/`, element: <NotFound /> },
  ],
  { basename: `/${import.meta.env.VITE_BASENAME}` }
);

export default router;
