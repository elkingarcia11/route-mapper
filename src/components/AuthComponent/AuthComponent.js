import React from "react";
import "./AuthComponent.css";
const AuthComponent = ({ signIn }) => {
  return (
    <div className="google-button-body">
      <button className="google-signin-button" onClick={() => signIn()}>
        <img className="google-icon" src="google.png" alt="Google Logo" />
        <div className="button-text">Sign in with Google</div>
      </button>
    </div>
  );
};

export default AuthComponent;
