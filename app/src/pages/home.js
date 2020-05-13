import React from "react";
import CovidData from "../components/CovidData.js";

// Material UI
import Typography from "@material-ui/core/Typography";

function home(props) {
  return (
    <div>
      <Typography variant="h4">Covid 19 Tracker Application</Typography>
      <CovidData />
    </div>
  );
}

export default home;
