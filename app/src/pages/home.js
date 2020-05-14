import React, { Fragment } from "react";
import CovidData from "../components/CovidData.js";

// Material UI
import Typography from "@material-ui/core/Typography";

function home(props) {
  return (
    <div className="homeContainer">
      <CovidData />
    </div>
  );
}

export default home;
