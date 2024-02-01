import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import PopupMenu from "../PopupMenu/PopupMenu";
import "./NumberedList.css";
import DeleteAllPopup from "../DeleteAllPopup/DeleteAllPopup";

const NumberedList = ({ stops, eraseRoute, eraseStop }) => {
  const [shouldCloseOtherPopups, setShouldCloseOtherPopups] = useState(false);
  const [showDeleteAllPopup, setShowDeleteAllPopup] = useState(false);
  return (
    <div id="autoGrowContainer" className="numbered-list">
      <div className="nl-row">
        <h2>Stops</h2>
        <button
          className="nl-delete"
          onClick={()=>{setShowDeleteAllPopup(true)}}
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
            shouldCloseOtherPopups={shouldCloseOtherPopups}
            setShouldCloseOtherPopups={setShouldCloseOtherPopups}
            eraseStop={eraseStop}
          />
        ))}{showDeleteAllPopup && <DeleteAllPopup showDeleteAllPopup={showDeleteAllPopup} setShowDeleteAllPopup={setShowDeleteAllPopup} eraseRoute={eraseRoute} />}
    
      </div>
      </div>
  );
};

export default NumberedList;
