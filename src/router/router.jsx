import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Properties from "../pages/Properties/Properties";
import PrivateRoute from "./PrivateRoute";
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
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
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
        path: "/properties",
        element: (
          <PrivateRoute>
            <Properties></Properties>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
