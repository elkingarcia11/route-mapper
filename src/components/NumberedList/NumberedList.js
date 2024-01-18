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

  const separatorStyle = {
    height: "0.5px", // Adjust the thickness of the separator
    background: "gray", // Color of the separator
    margin: "5px 0", // Adjust the margin for spacing
  };

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

          <div style={separatorStyle}></div>
        </div>
      ))}
    </div>
  );
};

export default NumberedList;
