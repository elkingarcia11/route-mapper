import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import AddressDisplay from "./components/AddressDisplay/AddressDisplay";
function App() {
  return (
    <div className="App">
      <div className="column">
        <SearchBar />
        <AddressDisplay />
      </div>
      <div className="column-two">YO</div>
    </div>
  );
}

export default App;
