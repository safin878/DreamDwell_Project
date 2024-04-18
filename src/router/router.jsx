import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Membership from "../pages/Membership/Membership";
import PrivateRoute from "./PrivateRoute";
import EstateDetailes from "../pages/EstateDetailes/EstateDetailes";
import Error404 from "../Error/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error404></Error404>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/update",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/membership",
        element: <Membership></Membership>,
        loader: () => fetch(`./membership.json`),
      },
      {
        path: "/details/:id",
        loader: () => fetch("/data.json"),
        element: (
          <PrivateRoute>
            <EstateDetailes></EstateDetailes>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
