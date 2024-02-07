import React, { useEffect, useState } from "react";

import GoogleMapComponent from "./components/GoogleMapComponent/GoogleMapComponent";
import AuthComponent from "./components/AuthComponent/AuthComponent";
import StopsList from "./components/StopsList/StopsList";

import auth from "./firebase";
import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";

import "./App.css";

function App() {
  const [mapMode, setMapMode] = useState(false);
  // Retrieve stops from local session on initial load
  const initialStops = JSON.parse(localStorage.getItem("stops")) || [];
  // Retrieve auth info from local session on initial load
  const initialUser = JSON.parse(localStorage.getItem("user")) || null;

  const [stops, setStops] = useState(initialStops);
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    localStorage.setItem("stops", JSON.stringify(stops));
  }, [stops]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

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
          setUser(user.uid);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  const signOff = async () => {
    try {
      await signOut(auth)
        .then(() => {
          // Sign-out successful.
          setUser(null);
          setStops([]);
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="App">
      {user == null ? (
        <AuthComponent signIn={signIn} />
      ) : (
        <div>
          <div className="map-and-list">
            {mapMode ? (
              <GoogleMapComponent stops={stops} />
            ) : (
              <StopsList
                stops={stops}
                setStops={setStops}
                setUser={setUser}
                signOff={signOff}
              />
            )}
          </div>
          <div className="toggle-map-button-container">
            <button
              className="toggle-map-button"
              onClick={() => setMapMode(!mapMode)}
            >
              {mapMode ? "List Mode" : "Map Mode"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
