import React from "react";
import IndividualCountryData from "../components/IndividualCountryData";

function individualCountry(props) {
  return (
    <div className="individualCountryContainer">
      <IndividualCountryData name={props.match.params.countryName} />
    </div>
  );
}

export default individualCountry;
