import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import PopupMenu from "../PopupMenu/PopupMenu";
import "./NumberedList.css";
import DeleteAllPopup from "../DeleteAllPopup/DeleteAllPopup";

const NumberedList = ({ stops, eraseRoute, eraseStop }) => {
  const [showDeleteAllPopup, setShowDeleteAllPopup] = useState(false);
  const [openPopups, setOpenPopups] = useState([]);

  const handlePopupToggle = (index) => {
    // Check if the popup is already open
    const isOpen = openPopups.includes(index);

    // Toggle the state for the clicked popup
    if (isOpen) {
      setOpenPopups(openPopups.filter((popupIndex) => popupIndex !== index));
    } else {
      setOpenPopups([...openPopups, index]);
    }
  };

  const closeAllPopups = () => {
    setOpenPopups([]);
    setShowDeleteAllPopup(false);
  };

  return (
    <div id="autoGrowContainer" className="numbered-list">
      <div className="nl-row">
        <h2>Stops</h2>
        <button
          className="nl-delete"
          onClick={() => {
            closeAllPopups();
            setShowDeleteAllPopup(true);
          }}
          aria-label="Delete Route"
        >
          <FaTrash /> <span>Delete Route</span>
        </button>
      </div>
      <div className="nl-list">
        {stops.map((stop, index) => (
          <PopupMenu
            stop={stop}
            key={index}
            index={index}
            isOpen={openPopups.includes(index)}
            onToggle={() => handlePopupToggle(index)}
            eraseStop={eraseStop}
          />
        ))}
        {showDeleteAllPopup && (
          <DeleteAllPopup
            showDeleteAllPopup={showDeleteAllPopup}
            setShowDeleteAllPopup={setShowDeleteAllPopup}
            eraseRoute={eraseRoute}
          />
        )}
      </div>
    </div>
  );
};

export default NumberedList;
