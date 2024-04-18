import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from "firebase/auth";
import { FaGithub } from "react-icons/fa";
import { GithubAuthProvider } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import auth from "../../Firebase/firebase.init";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const providergit = new GithubAuthProvider();

  const provider = new GoogleAuthProvider();
  const { login, Googlelog, Gitglelog } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showpassword, setshowpassword] = useState(false);
  const hol = (e) => {
    e.preventDefault();
    const from = new FormData(e.currentTarget);
    const email = from.get("email");
    const password = from.get("password");

    console.log(email, password);
    login(email, password)
      .then((result) => {
        // Signed in

        toast.success("Login Successfully by Google");
        navigate(location?.state ? location.state : "/");
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const hog = (e) => {
    e.preventDefault();
    Googlelog(auth, provider)
      .then((result) => {
        // Signed in

        toast.success("Login Successfully");
        navigate(location?.state ? location.state : "/");
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const hogit = (e) => {
    e.preventDefault();
    Gitglelog(auth, providergit)
      .then((result) => {
        // Signed in

        toast.success("Login Successfully by GitHub");
        navigate(location?.state ? location.state : "/");
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>DD || Login</title>
      </Helmet>
      <div data-aos="zoom-in" className="hero min-h-screen  mx-auto container">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={hol} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex justify-center items-center relative">
                  <input
                    type={showpassword ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered w-full "
                    name="password"
                    required
                  />

                  <span
                    className="absolute  right-3 "
                    onClick={() => setshowpassword(!showpassword)}
                  >
                    {showpassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
          <div className="flex gap-5">
            <button onClick={hog} className="btn btn-outline">
              <span>
                <FcGoogle />
              </span>
              Google
            </button>
            <button onClick={hogit} className="btn btn-outline btn-primary">
              <span>
                <FaGithub />
              </span>
              Github
            </button>
          </div>
          <p>
            {" "}
            You Don't Have An Account Please{" "}
            <Link className="font-bold text-blue-700" to="/register">
              Regester!
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
