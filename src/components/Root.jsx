import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { Helmet } from "react-helmet-async";
import Footer from "./Footer/Footer";

const Root = () => {
  return (
    <>
      <Helmet>
        <title>DD || Home</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="md:h-[100px] h-16"></div>
      <div className="min-h-[calc(100vh-352px)]  md:mt-8">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
