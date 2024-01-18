import React, { useState } from "react";

import GoogleMapComponent from "./components/GoogleMapComponent/GoogleMapComponent";
import StopsList from "./components/StopsList/StopsList";

import "./App.css";

function App() {
  const [mapMode, setMapMode] = useState(false);
  const [stops, setStops] = useState([]);

  return (
    <div className="App">
      <div className="app-container">
        {mapMode ? (
          <GoogleMapComponent stops={stops} />
        ) : (
          <StopsList stops={stops} setStops={setStops} />
        )}
      </div>
      <div className="app-button">
        <button onClick={() => setMapMode(!mapMode)}>
          {mapMode ? "List Mode" : "Map Mode"}
        </button>
      </div>
    </div>
  );
}

export default App;
