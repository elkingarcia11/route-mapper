import { useState } from "react";
import { FaTrash, FaSignOutAlt } from "react-icons/fa";
import PopupMenu from "../PopupMenu/PopupMenu";
import "./NumberedList.css";
import DeleteAllPopup from "../DeleteAllPopup/DeleteAllPopup";
import SignOutPopup from "../SignOutPopup/SignOutPopup";

const NumberedList = ({ stops, eraseRoute, eraseStop, signOff }) => {
  const [showDeleteAllPopup, setShowDeleteAllPopup] = useState(false);
  const [showSignOutPopup, setShowSignOutPopup] = useState(false);
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
    setShowSignOutPopup(false);
  };

  return (
    <div>
      <div className="numbered-list">
        <div className="nl-row">
          <div className="nl-row-column">
            <h2>Stops</h2>
            {stops.length > 0 && (
              <button
                className="nl-delete"
                onClick={() => {
                  closeAllPopups();
                  setShowDeleteAllPopup(true);
                }}
                aria-label="Delete Route"
              >
                <FaTrash />
              </button>
            )}
          </div>
          <button
            className="nl-signout"
            onClick={() => {
              closeAllPopups();
              setShowSignOutPopup(true);
            }}
            aria-label="Sign Out"
          >
            <span>Sign Out</span> <FaSignOutAlt />
          </button>
        </div>
        <div className="nl-list">
          {stops.map((stop, index) => (
            <PopupMenu
              stop={stop}
              key={stop.address} // or any other unique identifier
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

          {showSignOutPopup && (
            <SignOutPopup
              showSignOutPopup={showSignOutPopup}
              setShowSignOutPopup={setShowSignOutPopup}
              signOff={signOff}
            />
          )}
        </div>
      </div>
      {showSignOutPopup && (
        <SignOutPopup
          showSignOutPopup={showSignOutPopup}
          setShowSignOutPopup={setShowSignOutPopup}
          signOff={signOff}
        />
      )}
    </div>
  );
};

export default NumberedList;
