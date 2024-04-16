import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <div>
      <h1>oops erro</h1>
      <Link to="/">
        <button className="btn">Go Back</button>
      </Link>
    </div>
  );
};

export default Error404;
