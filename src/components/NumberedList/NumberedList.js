import { useEffect } from "react";

import "./NumberedList.css";

const NumberedList = ({ listOfStops }) => {
  useEffect(() => {
    const container = document.getElementById("autoGrowContainer");
    if (container) {
      container.style.height = "auto";
      container.style.height = `${container.scrollHeight}px`;
    }
  }, [listOfStops]);

  return (
    <div id="autoGrowContainer" className="numbered-list">
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
