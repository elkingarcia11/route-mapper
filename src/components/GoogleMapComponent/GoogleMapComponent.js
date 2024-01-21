import React, { useState } from "react";
import {
  APIProvider,
  AdvancedMarker,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";

import PropTypes from "prop-types";
import "./GoogleMapComponent.css";

const Display = ({ address }) => {
  return (
    <div className="gm-display-container">
      <div className="gm-display-p">{address}</div>
    </div>
  );
};

const GoogleMapComponent = ({ stops }) => {
  const [address, setAddress] = useState("");
  const [selectedPin, setSelectedPin] = useState(null);

  const show = (stop, index) => {
    if (
      stop !== undefined &&
      stop !== null &&
      typeof index === "number" &&
      index >= 0
    ) {
      // If stop is not undefined, not null, and index is a number >= 0
      if (index === selectedPin) {
        // If the index is equal to the currently selected pin
        setSelectedPin(null);
        setAddress("");
      } else {
        // If the index is different from the currently selected pin
        setSelectedPin(index);
        setAddress(stop.address);
      }
    } else {
      // If stop is undefined, null, or index is not a number greater than -1
      setSelectedPin(null);
      setAddress("");
    }
  };

  if (!stops || !Array.isArray(stops)) {
    // Handle the case where stops is not a valid array
    return <div>No stops data available.</div>;
  } else {
    return (
      <>
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_MAP_API_KEY}>
          <div className="container-style">
            <Map
              mapId={process.env.REACT_APP_GOOGLE_MAPS_MAP_API_KEY}
              center={{ lat: 40.854541, lng: -73.8939687 }}
              zoom={12}
            >
              {stops.map((stop, index) => {
                const isSelected = index === selectedPin;
                return (
                  <AdvancedMarker
                    key={index}
                    position={{ lat: stop.lat, lng: stop.lng }}
                    onClick={() => show(stop, index)}
                  >
                    <Pin
                      background={isSelected ? "#e0e0e0" : "#22ccff"}
                      borderColor={isSelected ? "#999999" : "#1e89a1"}
                      glyphColor={isSelected ? "#666666" : "#0f677a"}
                    />
                  </AdvancedMarker>
                );
              })}
            </Map>
            {selectedPin !== null && <Display address={address} />}
          </div>
        </APIProvider>
      </>
    );
  }
};

GoogleMapComponent.propTypes = {
  stops: PropTypes.array.isRequired,
};

export default GoogleMapComponent;
