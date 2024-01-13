import "./AddressDisplay.css";
const AddressDisplay = ({ address, addStop }) => {
  const add = () => {
    addStop(address.formatted_address);
  };

  const cancel = () => {
    addStop(null);
  };

  return (
    <div className="address-display-container">
      <div className="address-display-p">{address.formatted_address}</div>
      <div className="address-row">
        <button className="address-display-button-cancel" onClick={cancel}>
          CANCEL
        </button>
        <button className="address-display-button" onClick={add}>
          ADD STOP
        </button>
      </div>
    </div>
  );
};
export default AddressDisplay;
/*
{
    "address_components": [
        {
            "long_name": "133",
            "short_name": "133",
            "types": [
                "street_number"
            ]
        },
        {
            "long_name": "West 197th Street",
            "short_name": "W 197th St",
            "types": [
                "route"
            ]
        },
        {
            "long_name": "West Bronx",
            "short_name": "West Bronx",
            "types": [
                "neighborhood",
                "political"
            ]
        },
        {
            "long_name": "The Bronx",
            "short_name": "Bronx",
            "types": [
                "sublocality_level_1",
                "sublocality",
                "political"
            ]
        },
        {
            "long_name": "Bronx County",
            "short_name": "Bronx County",
            "types": [
                "administrative_area_level_2",
                "political"
            ]
        },
        {
            "long_name": "New York",
            "short_name": "NY",
            "types": [
                "administrative_area_level_1",
                "political"
            ]
        },
        {
            "long_name": "United States",
            "short_name": "US",
            "types": [
                "country",
                "political"
            ]
        },
        {
            "long_name": "10468",
            "short_name": "10468",
            "types": [
                "postal_code"
            ]
        },
        {
            "long_name": "2201",
            "short_name": "2201",
            "types": [
                "postal_code_suffix"
            ]
        }
    ],
    "formatted_address": "133 W 197th St, Bronx, NY 10468, USA",
    "geometry": {
        "location": {
            "lat": 40.8724516,
            "lng": -73.9006687
        }
    },
    "place_id": "ChIJ27D5pprzwokREM_tiwtJ_sQ",
    "html_attributions": []
}
*/
