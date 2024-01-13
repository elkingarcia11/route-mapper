import "./NumberedList.css";
const NumberedList = ({ listOfStops }) => {
  return (
    <div className="numbered-list">
      <h2>Stops</h2>
      {listOfStops.map((stop, index) => (
        <div className="stop-button">
          <button>
            {index + 1}. {stop}
          </button>
        </div>
      ))}
    </div>
  );
};

export default NumberedList;
