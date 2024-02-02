import React from "react";
import auth from "../../firebase";
import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import "./AuthComponent.css";
const AuthComponent = ({ setUser }) => {
  const signIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          //  const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          setUser(user);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="google-button-body">
      <button className="google-signin-button" onClick={signIn}>
        <img className="google-icon" src="google.png" alt="Google Logo" />
        <div className="button-text">Sign in with Google</div>
      </button>
    </div>
  );
};

export default AuthComponent;
