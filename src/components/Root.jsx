import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { Helmet } from "react-helmet-async";

const Root = () => {
  return (
    <>
      <Helmet>
        <title>DD || Home</title>
      </Helmet>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default Root;
