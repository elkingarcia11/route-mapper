import React from "react";
import "./PopupMenu.css";
const PopupMenu = ({ stop, index, eraseStop, isOpen, onToggle }) => {
  const handleCancelClick = () => {
    onToggle();
  };
  const deleteStop = (index) => {
    eraseStop(index);
    onToggle();
  };

  const separatorStyle = {
    height: "0.5px", // Adjust the thickness of the separator
    background: "gray", // Color of the separator
    margin: "5px 0", // Adjust the margin for spacing
  };

  return (
    <div className="stop-item" key={stop.id || index}>
      <button className="st-button" onClick={() => onToggle()}>
        {index + 1}. {stop.address}
      </button>
      <div style={separatorStyle}></div>
      {isOpen && (
        <div className="popup-menu">
          <div className="popup-menu-row">
            <button
              className="pu-cancel"
              onClick={() => handleCancelClick()}
              aria-label="Cancel"
            >
              Cancel
            </button>

            <button
              className="pu-delete"
              onClick={() => deleteStop(index)}
              aria-label="Delete Stop"
            >
              <span>Delete Stop</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupMenu;
