import { useEffect } from "react";
import { FaTrash } from "react-icons/fa";

import "./NumberedList.css";

const NumberedList = ({ stops, eraseRoute }) => {
  useEffect(() => {
    const container = document.getElementById("autoGrowContainer");
    if (container) {
      container.style.height = "auto";
      container.style.height = `${container.scrollHeight}px`;
    }
  }, [stops]);

  return (
    <div id="autoGrowContainer" className="numbered-list">
      <div className="nl-row">
        <h2>Stops</h2>
        <button
          className="nl-delete"
          onClick={eraseRoute}
          aria-label="Delete Route"
        >
          <FaTrash /> <span>Delete Route</span>
        </button>
      </div>
      {stops.map((stop, index) => (
        <div className="stop-item" key={stop.id || index}>
          <button>
            {index + 1}. {stop.address}
          </button>
        </div>
      ))}
    </div>
  );
};

export default NumberedList;
