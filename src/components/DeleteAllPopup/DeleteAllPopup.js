import "./DeleteAllPopup.css";
const DeleteAllPopup = ({
  showDeleteAllPopup,
  setShowDeleteAllPopup,
  eraseRoute,
}) => {
  const closePopup = () => {
    setShowDeleteAllPopup(false);
  };

  return (
    <div
      className={`da-popup-container ${
        showDeleteAllPopup ? "visible" : "hidden"
      }`}
    >
      <div className="da-popup-content">
        <h3>Do you want to delete the entire route?</h3>
        <div className="da-row">
          <button
            className="da-cancel-button"
            onClick={() => {
              closePopup();
            }}
          >
            Cancel
          </button>
          <button
            className="da-delete-button"
            onClick={() => {
              eraseRoute();
            }}
          >
            Delete All
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAllPopup;
