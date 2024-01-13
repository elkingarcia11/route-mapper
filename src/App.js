import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import AddressDisplay from "./components/AddressDisplay/AddressDisplay";
import NumberedList from "./components/NumberedList/NumberedList";
function App() {
  const [stops, setStops] = useState([]);
  // State to hold the address
  const [address, setAddress] = useState(null);

  // Function to update the address
  const updateAddress = (address) => {
    setAddress(address);
  };

  const addStop = (stop) => {
    if (!stops.includes(stop)) {
      setStops((prevStops) => [...prevStops, stop]);
    }
  };

  return (
    <div className="App">
      <div className="column">
        <SearchBar updateAddress={updateAddress} />
        {address ? (
          <AddressDisplay address={address} addStop={addStop} />
        ) : (
          <></>
        )}
        {stops ? <NumberedList listOfStops={stops} /> : <></>}
      </div>
      <div className="column-two">YO</div>
    </div>
  );
}

export default App;
