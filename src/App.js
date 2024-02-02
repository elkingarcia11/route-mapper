import React, { useEffect, useState } from "react";

import GoogleMapComponent from "./components/GoogleMapComponent/GoogleMapComponent";
import AuthComponent from "./components/AuthComponent/AuthComponent";
import StopsList from "./components/StopsList/StopsList";
import { onAuthStateChanged } from "firebase/auth";

import {
  auth,
  storeUserInLocalStorage,
  removeUserFromLocalStorage,
} from "./firebase";

import "./App.css";

function App() {
  const [mapMode, setMapMode] = useState(false);
  // Retrieve stops from local session on initial load
  const initialStops = JSON.parse(localStorage.getItem("stops")) || [];
  const [stops, setStops] = useState(initialStops);
  const initialUser = JSON.parse(localStorage.getItem("user")) || null;
  const [user, setUser] = useState(initialUser);
  // Update local session whenever stops change

  useEffect(() => {
    localStorage.setItem("stops", JSON.stringify(stops));
  }, [stops]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <div className="App">
      {user == null ? (
        <AuthComponent setUser={setUser} />
      ) : (
        <div>
          <div className="map-and-list">
            {mapMode ? (
              <GoogleMapComponent stops={stops} />
            ) : (
              <StopsList stops={stops} setStops={setStops} setUser={setUser} />
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
