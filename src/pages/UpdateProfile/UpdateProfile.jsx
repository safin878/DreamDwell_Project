import { Helmet } from "react-helmet-async";
import { useContext, useRef } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import auth from "../../Firebase/firebase.init";
const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const nameref = useRef(null);

  const updatepp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    updateProfile(auth.currentUser, {
      displayName: `${name}`,
      photoURL: `${photoUrl}`,
    })
      .then(() => {
        // Profile updated!
        toast.success("Profile Updated Successfully");
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.log(error);
      });
    console.log(name);
  };

  return (
    <div className=" flex items-center justify-center ">
      <Helmet>
        <title>DD || UpdateProfile</title>
      </Helmet>
      <div className=" w-full">
        <div className=" md:w-2/4 mx-auto flex flex-col justify-center items-center">
          <h2 data-aos="fade-left" className="text-5xl text-primary">
            Update Your Profile
          </h2>
          <img
            data-aos="fade-right"
            data-aos-delay="300"
            src={user.photoURL}
            className="max-w-sm rounded-lg my-3  w-52"
          />
          <div className="text-center my-3">
            <form onSubmit={updatepp}>
              <div data-aos="fade-left" data-aos-delay="400">
                <label className="label">
                  <span className="label-text text-primary">Name :</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  ref={nameref}
                  className="input input-bordered input-error w-full max-w-xs"
                  defaultValue={user.displayName}
                  name="name"
                />
              </div>

              <div data-aos="fade-right" data-aos-delay="500">
                <label className="label">
                  <span className="label-text text-primary">PhotoUrl :</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-error w-full max-w-xs"
                  defaultValue={user.photoURL}
                  name="photoUrl"
                />
              </div>

              <div data-aos="fade-left" data-aos-delay="600">
                <label className="label">
                  <span className="label-text text-primary">Email :</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-error w-full max-w-xs"
                  defaultValue={user.email}
                  disabled
                />
              </div>

              <button
                data-aos="fade-down"
                data-aos-delay="700"
                className="btn btn-primary max-w-xs my-3"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
