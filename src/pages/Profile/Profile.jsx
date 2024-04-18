import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Helmet>
        <title>DD || Profile</title>
      </Helmet>

      <div>
        <div className=" w-3/4 mx-auto flex flex-col justify-center items-center">
          <h2 data-aos="fade-right" className="text-5xl text-primary">
            Profile Information
          </h2>

          <img
            data-aos="fade-left"
            data-aos-delay="300"
            src={user.photoURL}
            className="max-w-sm rounded-lg my-3  w-52"
          />
          <div className="text-center my-3">
            <div>
              <div data-aos="fade-right" data-aos-delay="400">
                <label className="label">
                  <span className="label-text text-primary">Name :</span>
                </label>
                <p className="border p-4 rounded-lg ">{user.displayName}</p>
              </div>
              <div data-aos="fade-left" data-aos-delay="500">
                <label className="label">
                  <span className="label-text text-primary">Email :</span>
                </label>
                <p className="border p-4 rounded-lg my-1">{user.email}</p>
              </div>
              <div data-aos="fade-right" data-aos-delay="600">
                <label className="label">
                  <span className="label-text text-primary">PhotoURL :</span>
                </label>
                <p className="border p-4 rounded-lg my-1">{user.photoURL}</p>
              </div>
            </div>
            <Link to="/update">
              <button
                data-aos="fade-down"
                data-aos-delay="700"
                className="btn btn-primary max-w-xs my-2"
              >
                Update Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
