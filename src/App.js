import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import AddressDisplay from "./components/AddressDisplay/AddressDisplay";
function App() {
  // State to hold the address
  const [address, setAddress] = useState(null);

  // Function to update the address
  const updateAddress = (address) => {
    setAddress(address);
  };

  return (
    <div className="App">
      <div className="column">
        <SearchBar updateAddress={updateAddress} />
        {address ? <AddressDisplay address={address} /> : <></>}
      </div>
      <div className="column-two">YO</div>
    </div>
  );
}

export default App;
