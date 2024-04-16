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
    <div>
      <Helmet>
        <title>DD || UpdateProfile</title>
      </Helmet>
      <div>
        <div className=" w-2/4 mx-auto flex flex-col justify-center items-center">
          <h2 className="text-5xl text-primary">Update Your Profile</h2>
          <img src={user.photoURL} className="max-w-sm rounded-lg my-3  w-52" />
          <div className="text-center my-3">
            <form onSubmit={updatepp}>
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

              <button className="btn btn-primary max-w-xs my-3">
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
