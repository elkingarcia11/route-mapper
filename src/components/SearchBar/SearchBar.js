import Autocomplete from "react-google-autocomplete";

const SearchBar = () => {
  return (
    <>
      <Autocomplete
        apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        style={{ width: "90%" }}
        options={{
          types: ["address"],
          componentRestrictions: { country: "us" },
        }}
        onPlaceSelected={(place) => console.log(place)}
        className="search-bar-input"
      />
    </>
  );
};

export default SearchBar;

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
