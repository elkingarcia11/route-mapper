import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Autocomplete from "react-google-autocomplete";

import "./SearchBar.css";

const SearchBar = forwardRef(function SearchBar({ setAddress }, ref) {
  const handleClick = (address) => {
    if (address) {
      setAddress(address);
    }
  };

  return (
    <div className="search-bar">
      <Autocomplete
        ref={ref}
        apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ""}
        style={{
          border: "none",
          width: "100%",
          padding: "16px 24px",
          fontSize: "17px",
        }}
        options={{
          types: ["address"],
          componentRestrictions: { country: "us" },
        }}
        onPlaceSelected={(place) => handleClick(place)}
      />
    </div>
  );
});

SearchBar.propTypes = {
  setAddress: PropTypes.func.isRequired,
};

export default SearchBar;
