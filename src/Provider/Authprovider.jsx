// import { createContext, useState } from "react";
// import auth from "../Firebase/firebase.init";
// import { createUserWithEmailAndPassword } from "firebase/auth";

// export const Authcontext = createContext(null);
// const Authprovider = ({ children }) => {
//   const [user, setuser] = useState(null);
//   const userCreate = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };
//   const authInfo = {
//     user,
//     userCreate,
//   };
//   return (
//     <Authcontext.provider value={authInfo}>{children}</Authcontext.provider>
//   );
// };

// export default Authprovider;
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/firebase.init";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const userCreate = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  const login = (email, password) => {
    setloading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setloading(true);

    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setloading(false);
      console.log("user In The State: ", currentUser);
      return () => {
        unsubscribe();
      };
    });
  }, []);
  const authInfo = {
    user,
    loading,
    userCreate,
    logout,
    login,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
