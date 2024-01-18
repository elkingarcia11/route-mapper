import { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import "./NumberedList.css";

const NumberedList = ({ listOfStops, eraseRoute }) => {
  useEffect(() => {
    const container = document.getElementById("autoGrowContainer");
    if (container) {
      container.style.height = "auto";
      container.style.height = `${container.scrollHeight}px`;
    }
  }, [listOfStops]);

  return (
    <div id="autoGrowContainer" className="numbered-list">
      <div className="nl-row">
        <h2>Stops</h2>
        <button className="nl-delete" onClick={eraseRoute}>
          <FaTrash /> <span>Delete Route</span>
        </button>
      </div>
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
