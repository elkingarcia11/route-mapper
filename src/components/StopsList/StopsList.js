import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import AddressDisplay from "../AddressDisplay/AddressDisplay";
import NumberedList from "../NumberedList/NumberedList";
import SearchBar from "../SearchBar/SearchBar";
const StopsList = ({ stops, setStops }, ref) => {
  const [address, setAddress] = useState(null);
  const searchInputRef = useRef();

  const addStop = (stop) => {
    if (
      stop &&
      stop.address &&
      !stops.some((existingStop) => existingStop.address === stop.address)
    ) {
      setStops((prevStops) => [...prevStops, stop]);
    }

    setAddress(null);
    searchInputRef.current.value = "";
    searchInputRef.current.focus();
  };

  const eraseRoute = () => {
    setStops([]);
  };

  return (
    <div className="sl-container">
      <SearchBar ref={searchInputRef} setAddress={setAddress} />

      {stops.length > 0 && (
        <NumberedList stops={stops} eraseRoute={eraseRoute} />
      )}

      {address && <AddressDisplay address={address} addStop={addStop} />}
    </div>
  );
};

StopsList.propTypes = {
  stops: PropTypes.array.isRequired,
  setStops: PropTypes.func.isRequired,
};

export default StopsList;
