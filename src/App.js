import React, { useEffect, useState } from "react";

import GoogleMapComponent from "./components/GoogleMapComponent/GoogleMapComponent";
import AuthComponent from "./components/AuthComponent/AuthComponent";
import StopsList from "./components/StopsList/StopsList";

import { FaSignOutAlt } from "react-icons/fa";
import SignOutPopup from "./components/SignOutPopup/SignOutPopup";
import auth, { getApiKey, signInWithGoogle } from "./firebase";
import { signOut } from "firebase/auth";
import "./App.css";

function App() {
  const [showSignOutPopup, setShowSignOutPopup] = useState(false);
  const [mapMode, setMapMode] = useState(false);
  // Retrieve stops from local session on initial load
  const initialStops = JSON.parse(localStorage.getItem("stops")) || [];
  // Retrieve auth info from local session on initial load
  const initialUser = JSON.parse(localStorage.getItem("user")) || null;

  const [stops, setStops] = useState(initialStops);
  const [user, setUser] = useState(initialUser);
  const [apiKeys, setApiKeys] = useState(null);

  useEffect(() => {
    localStorage.setItem("stops", JSON.stringify(stops));
  }, [stops]);

  useEffect(() => {
    localStorage.setItem("apiKeys", JSON.stringify(apiKeys));
  }, [apiKeys]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));

    const fetchApiKey = async () => {
      try {
        if (user != null) {
          const aK = await getApiKey(user);
          setApiKeys(aK);
        } else {
          setApiKeys(null); // Handle the case where user is null
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    if (user != null) {
      fetchApiKey(user);
    }
  }, [user]);

  const signIn = async () => {
    try {
      const result = await signInWithGoogle();
      setUser(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signOff = async () => {
    try {
      await signOut(auth)
        .then(() => {
          // Sign-out successful.
          setUser(null);
          setStops([]);
          setApiKeys(null);
        })
        .catch((error) => {
          // An error happened.
          console.log(error.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="App">
      {!user ? (
        <AuthComponent signIn={signIn} />
      ) : (
        <div>
          {mapMode ? (
            <GoogleMapComponent stops={stops} apiKeys={apiKeys} />
          ) : apiKeys ? (
            <StopsList
              stops={stops}
              setStops={setStops}
              setUser={setUser}
              signOff={signOff}
              apiKeys={apiKeys}
            />
          ) : (
            <div style={{ padding: "12px" }}>
              Search unavailable at this moment...
              <div className="app-signout-btn">
                <button
                  className="nl-signout"
                  onClick={() => setShowSignOutPopup(true)}
                  aria-label="Sign Out"
                >
                  <span>Sign Out</span> <FaSignOutAlt />
                </button>
              </div>
              {showSignOutPopup && (
                <SignOutPopup
                  showSignOutPopup={showSignOutPopup}
                  setShowSignOutPopup={setShowSignOutPopup}
                  signOff={signOff}
                />
              )}
            </div>
          )}
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
