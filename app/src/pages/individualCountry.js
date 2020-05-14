import React from "react";
import IndividualCountryData from "../components/IndividualCountryData";
// Material UI
import Typography from "@material-ui/core/Typography";

function individualCountry(props) {
  return (
    <div className="individualCountryContainer">
      <IndividualCountryData name={props.match.params.countryName} />
    </div>
  );
}

export default individualCountry;
