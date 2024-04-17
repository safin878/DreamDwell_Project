import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import auth from "../../Firebase/firebase.init";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const hol = () => {
    logout(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("Sign-out successful");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const navlinks = (
    <>
      <NavLink className="btn btn-ghost hover:bg-color" to="/">
        <li>Home</li>
      </NavLink>
      <NavLink className="btn btn-ghost hover:bg-color" to="/update">
        <li>Update Profie</li>
      </NavLink>
      <NavLink className="btn btn-ghost hover:bg-color" to="/profile">
        <li>Profile</li>
      </NavLink>
      {user && (
        <NavLink className="btn btn-ghost hover:bg-color" to="/properties">
          <li>Properties</li>
        </NavLink>
      )}
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100   fixed  w-full  shadow-md z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu mr-4 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <div className="flex items-center">
            <img className="w-20" src="./logo.png" alt="" />
            <Link className="text-2xl font-bold" to="/">
              DreamDwell
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end hidden lg:inline-flex">
          {user ? (
            <div className="flex gap-2">
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <img
                  className="w-12 border rounded-full tooltip"
                  data-tip="hello"
                  alt="Tailwind "
                  src={user.photoURL}
                />
              </div>

              <button
                onClick={hol}
                className="btn text-white bg-pcolor  hover:bg-red-400 "
              >
                logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/login">
                <button className="btn bg-pcolor text-white hover:bg-scolor hover:text-black">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn bg-pcolor text-white hover:bg-scolor hover:text-black">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
