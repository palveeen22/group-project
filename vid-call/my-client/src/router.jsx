import { createBrowserRouter, redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./Components/Home/Home";
import Room from "./Components/Room/Room";
import PageNotFound404 from "./Components/PageNotFound404/PageNotFound404";

const router = createBrowserRouter([
  //   {
  //     path: "/login",
  //     element: <Login url={url} />,
  //   },
  {
    path: "/not-found",
    element: <PageNotFound404 />,
  },
  {
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room",
        element: <Room />,
      },
    ],
  },
]);
export default router;
