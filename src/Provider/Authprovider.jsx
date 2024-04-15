import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/firebase.init";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
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
  const Googlelog = (auth, provider) => {
    setloading(true);

    return signInWithPopup(auth, provider);
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
    Googlelog,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
