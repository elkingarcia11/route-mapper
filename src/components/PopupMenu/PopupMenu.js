import React, { useState } from "react";
import "./PopupMenu.css";
const PopupMenu = ({ stop, index, otherPopupOpen, setOtherPopupOpen }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const handleStopClick = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleCancelClick = () => {
    setMenuVisible(false);
  };

  const separatorStyle = {
    height: "0.5px", // Adjust the thickness of the separator
    background: "gray", // Color of the separator
    margin: "5px 0", // Adjust the margin for spacing
  };

  return (
    <div className="stop-item" key={stop.id || index}>
      <button className="st-button" onClick={() => handleStopClick()}>
        {index + 1}. {stop.address}
      </button>
      <div style={separatorStyle}></div>
      {isMenuVisible && !otherPopupOpen && (
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
              //onClick={eraseRoute}
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
