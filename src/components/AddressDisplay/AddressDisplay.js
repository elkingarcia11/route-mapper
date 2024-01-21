import "./AddressDisplay.css";

const AddressDisplay = ({ address, addStop }) => {
  const add = () => {
    if (address && address.formatted_address && address.geometry.location) {
      const stop = {
        address: address.formatted_address,
        lat: address.geometry.location.lat(),
        lng: address.geometry.location.lng(),
      };
      addStop(stop);
    } else {
      addStop();
    }
  };

  const cancel = () => {
    addStop();
  };

  return (
    <div className="address-display-container">
      <div className="address-display-p">{address.formatted_address}</div>

      <div className="address-row">
        <button
          className="address-display-button-cancel"
          onClick={() => cancel()}
          type="button"
        >
          CANCEL
        </button>
        <button
          className="address-display-button"
          onClick={() => add()}
          type="button"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddressDisplay;
