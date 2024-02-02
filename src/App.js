import React, { useEffect, useState } from "react";

import GoogleMapComponent from "./components/GoogleMapComponent/GoogleMapComponent";
import StopsList from "./components/StopsList/StopsList";

import "./App.css";

function App() {
  const [mapMode, setMapMode] = useState(false);
  // Retrieve stops from local session on initial load
  const initialStops = JSON.parse(localStorage.getItem("stops")) || [];

  const [stops, setStops] = useState(initialStops);
  // Update local session whenever stops change
  useEffect(() => {
    localStorage.setItem("stops", JSON.stringify(stops));
  }, [stops]);
  return (
    <div className="App">
      {mapMode ? (
        <GoogleMapComponent stops={stops} />
      ) : (
        <StopsList stops={stops} setStops={setStops} />
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
  );
}

export default App;
