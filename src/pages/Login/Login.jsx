// import { Link } from "react-router-dom";
// const Login = () => {
//   return (
//     <div>
//       <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content flex-col ">
//           <div className="text-center lg:text-left">
//             <h1 className="text-5xl font-bold">Login now!</h1>
//           </div>
//           <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//             <form className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="email"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="password"
//                   className="input input-bordered"
//                   required
//                 />
//                 <label className="label">
//                   <a href="#" className="label-text-alt link link-hover">
//                     Forgot password?
//                   </a>
//                 </label>
//               </div>
//               <div className="form-control mt-6">
//                 <button className="btn btn-primary">Login</button>
//               </div>
//             </form>
//             <div></div>
//           </div>
//           <p>
//             You Don't Have An Account Please{" "}
//             <Link className="font-bold text-blue-700" to="/register">
//               Regester!
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location in the login page", location);
  const hol = (e) => {
    e.preventDefault();
    const from = new FormData(e.currentTarget);
    const email = from.get("email");
    const password = from.get("password");

    console.log(email, password);

    login(email, password)
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
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
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
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
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
          <p>
            {" "}
            You Don't Have An Account Please{" "}
            <Link className="font-bold text-blue-700" to="/register">
              Regester!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
