import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.initial";

initializeAuthentication();
const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  //google signIn

  //email password sign in
  const emailPassSignIn = (email, pass) => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        //console.log(result.user);
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
        alert(error.message);
      });
  };

  // email password login
  const emailPassLogIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
        alert(error.message);
      });
  };

  //logout
  const Logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("signOut");
        setUser("");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    user,
    Logout,
    emailPassSignIn,
    emailPassLogIn,
  };
};
export default UseFirebase;
