import { useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const location = useLocation();
  const navigate = useNavigate();
  const { userCreate } = useContext(AuthContext);
  //   const hp = (data) => {
  //     console.log(data.name);
  //     const name = data.name
  //   };
  const hor = (data) => {
    // e.preventDefault();
    // console.log(e.currentTarget);
    const name = data.name;
    const url = data.url;
    const email = data.email;
    const password = data.password;
    // console.log(name, url, email, password);

    userCreate(email, password)
      .then((result) => {
        // Signed in
        toast.success("Register Successfully");
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
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(hor)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                />
                <div>
                  {errors.name && (
                    <p className="text-red-600">{errors.name.message}</p>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  {...register("url", {
                    required: {
                      value: true,
                      message: "Photo Url is required",
                    },
                  })}
                  type="Text"
                  placeholder="PhotoUrl"
                  className="input input-bordered"
                  name="url"
                />
                <div>
                  {errors.url && (
                    <p className="text-red-600">{errors.url.message}</p>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />

                <div>
                  {errors.email && (
                    <p className="text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])/,
                      message:
                        "Password must contain one uppercase letter and one lowercase letter",
                    },
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                <div>
                  {errors.password && (
                    <p className="text-red-600">{errors.password.message}</p>
                  )}
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
          <p>
            {" "}
            You Have An Account Please{" "}
            <Link className="font-bold text-blue-700" to="/login">
              Login!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
