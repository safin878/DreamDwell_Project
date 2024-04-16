import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="w-1/4" src="/public/5203299.jpg" alt="" />
      <Link to="/">
        <button className="btn hover:bg-sky-600">Go Back</button>
      </Link>
    </div>
  );
};

export default Error404;
