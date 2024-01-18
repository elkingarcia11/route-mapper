import React, { useState } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

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
  const [showAddress, setShowAddress] = useState(false);

  const show = (stop) => {
    if (stop !== null && stop !== undefined) {
      if (stop.address === address) {
        setShowAddress(false);
        setAddress("");
      } else {
        setAddress(stop.address);
        setShowAddress(true);
      }
    } else {
      setShowAddress(false);
    }
  };

  const position = { lat: 40.854541, lng: -73.8939687 };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "100%", // Use 100% width for flexibility
    height: "100%", // Adjust height based on showAddress
  };

  if (!stops || !Array.isArray(stops)) {
    // Handle the case where stops is not a valid array
    return <div>No stops data available.</div>;
  } else {
    return (
      <>
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_MAP_API_KEY}>
          <div style={containerStyle}>
            <Map center={position} zoom={12}>
              {stops.map((stop, index) => (
                <Marker
                  key={index}
                  position={{ lat: stop.lat, lng: stop.lng }}
                  onClick={() => show(stop)}
                />
              ))}
            </Map>
            {showAddress && <Display address={address} />}
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
