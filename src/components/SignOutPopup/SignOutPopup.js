import "../DeleteAllPopup/DeleteAllPopup.css";
import { signOut } from "firebase/auth";
import auth from "../../firebase";
const SignOutPopup = ({
  showSignOutPopup,
  setShowSignOutPopup,
  eraseRoute,
  setUser,
}) => {
  const closePopup = () => {
    setShowSignOutPopup(false);
  };

  const signOff = async () => {
    try {
      await signOut(auth)
        .then(() => {
          // Sign-out successful.
          setUser(null);
          eraseRoute();
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    } catch (error) {
      console.error(error.message);
    }
  };
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
              closePopup();
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
