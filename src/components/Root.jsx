import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { Helmet } from "react-helmet-async";
import Footer from "../pages/Footer/Footer";

const Root = () => {
  return (
    <>
      <Helmet>
        <title>DD || Home</title>
      </Helmet>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
