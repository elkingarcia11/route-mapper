import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
function App() {
  return (
    <div className="App">
      <div className="column">
        <SearchBar />
      </div>
      <div className="column">YO</div>
    </div>
  );
}

export default App;
