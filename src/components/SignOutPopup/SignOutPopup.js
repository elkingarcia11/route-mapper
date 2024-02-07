import "../DeleteAllPopup/DeleteAllPopup.css";
const SignOutPopup = ({ showSignOutPopup, setShowSignOutPopup, signOff }) => {
  return (
    <div
      className={`da-popup-container ${
        showSignOutPopup ? "visible" : "hidden"
      }`}
    >
      <div className="da-popup-content">
        <h3>Do you want to sign out?</h3>
        <div className="da-row">
          <button
            className="da-cancel-button"
            onClick={() => {
              setShowSignOutPopup(false);
            }}
          >
            Cancel
          </button>
          <button
            className="da-delete-button"
            onClick={() => {
              signOff();
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignOutPopup;
