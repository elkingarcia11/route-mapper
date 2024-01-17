import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import AddressDisplay from "./components/AddressDisplay/AddressDisplay";
import NumberedList from "./components/NumberedList/NumberedList";
import { useRef } from "react";
function App() {
  const searchBar = useRef(null);

  const [stops, setStops] = useState([]);
  // State to hold the address
  const [address, setAddress] = useState(null);

  // Function to update the address
  const updateAddress = (address) => {
    setAddress(address);
  };

  const addStop = (stop) => {
    if (stop === null) {
      setAddress(null);
    } else if (!stops.includes(stop)) {
      setStops((prevStops) => [...prevStops, stop]);
      setAddress(null);
      searchBar.current.value = "";
      searchBar.current.focus();
    }
  };

  return (
    <div className="App">
      <div className="app-container">
        <div className="map-container">
          <SearchBar
            ref={searchBar}
            updateAddress={updateAddress}
            className="search-bar"
          />
        </div>
        <div className="list">
          {stops.length > 0 ? <NumberedList listOfStops={stops} /> : <></>}
        </div>
        <div className="address-display">
          {address ? (
            <AddressDisplay address={address} addStop={addStop} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;