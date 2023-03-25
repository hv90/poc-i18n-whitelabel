import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";

const router = createBrowserRouter(
  [
    { path: "/", element: <Login /> },
    { path: "/:language", element: <Login /> },
    { path: "/:language/login", element: <Login /> },
  ],
  { basename: import.meta.env.BASE_URL }
);

export default router;
