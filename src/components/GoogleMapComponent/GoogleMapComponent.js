// GoogleMapComponent.js
import React, { useState } from 'react';
import {
  APIProvider,
  AdvancedMarker,
  Map,
  Pin,
} from '@vis.gl/react-google-maps';
import PropTypes from 'prop-types';
import './GoogleMapComponent.css';

const Display = ({ address }) => {
  return (
    <div className="display-container">
      <div className="display-content">{address}</div>
    </div>
  );
};

const GoogleMapComponent = ({ stops }) => {
  const [address, setAddress] = useState('');
  const [selectedPin, setSelectedPin] = useState(null);
  const [showDisplay, setShowDisplay] = useState(false);

  const show = (stop, index) => {
    if (stop && typeof index === 'number' && index >= 0) {
      if (index === selectedPin) {
        setSelectedPin(null);
        setAddress('');
        setShowDisplay(false);
      } else {
        setSelectedPin(index);
        setAddress(stop.address);
        setShowDisplay(true);
      }
    } else {
      setSelectedPin(null);
      setAddress('');
      setShowDisplay(false);
    }
  };

  if (!stops || !Array.isArray(stops)) {
    return <div>No stops data available.</div>;
  } else {
    return (
      <>
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_MAP_API_KEY}>
          <div className={`map-container ${showDisplay ? 'small' : 'large'}`}>
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
                      background={isSelected ? '#e0e0e0' : '#22ccff'}
                      borderColor={isSelected ? '#999999' : '#1e89a1'}
                      glyphColor={isSelected ? '#666666' : '#0f677a'}
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
