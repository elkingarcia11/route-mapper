// GoogleMapComponent.js
import React, { useEffect, useState } from "react";
import {
  APIProvider,
  AdvancedMarker,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";
import PropTypes from "prop-types";
import "./GoogleMapComponent.css";

const GoogleMapComponent = ({ stops, apiKeys }) => {
  const [address, setAddress] = useState("");
  const [selectedPin, setSelectedPin] = useState(null);
  const [showDisplay, setShowDisplay] = useState(false);

  const show = (stop, index) => {
    if (stop && typeof index === "number" && index >= 0) {
      if (index === selectedPin) {
        setSelectedPin(null);
        setAddress("");
        setShowDisplay(false);
      } else {
        setSelectedPin(index);
        setAddress(stop.address);
        setShowDisplay(true);
      }
    } else {
      setSelectedPin(null);
      setAddress("");
      setShowDisplay(false);
    }
  };

  if (!stops || !Array.isArray(stops)) {
    return <div>No stops data available.</div>;
  } else {
    return (
      <div className="map-display-container">
        {apiKeys["GOOGLE_MAPS_MAPS_API_KEY"] ? (
          <APIProvider apiKey={apiKeys["GOOGLE_MAPS_MAPS_API_KEY"]}>
            <div className={`map-container ${showDisplay ? "small" : "large"}`}>
              <Map
                mapId={apiKeys["GOOGLE_MAPS_MAPS_API_KEY"]}
                mapTypeControlOptions={{ mapTypeIds: ["ROADMAP"] }}
                streetViewControl={false}
                zoomControl={false}
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
              {address !== "" && (
                <div className="gm-display-container">
                  <div className="gm-display-content">{address}</div>
                </div>
              )}
            </div>
          </APIProvider>
        ) : (
          <div style={{ padding: "12px" }}>
            Account not authorized to view map...
          </div>
        )}
      </div>
    );
  }
};

GoogleMapComponent.propTypes = {
  stops: PropTypes.array.isRequired,
};

export default GoogleMapComponent;
