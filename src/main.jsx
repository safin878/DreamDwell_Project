import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Authprovider from "./Provider/Authprovider.jsx";
import "./index.css";
import router from "./router/router.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>

      <ToastContainer position="top-left" />
    </Authprovider>
  </React.StrictMode>
);
