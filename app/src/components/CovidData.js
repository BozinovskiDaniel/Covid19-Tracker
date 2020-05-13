import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryTableData from "./CountryTableData";
import GraphData from "./GraphData";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {},
  globalData: {
    marginBottom: 20,
  },
});

function CovidData(props) {
  const classes = useStyles();
  const [totalConfirmed, setTotalConfirmed] = useState(null);
  const [totalRecovered, setTotalRecovered] = useState(null);
  const [totalDeaths, setTotalDeaths] = useState(null);
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => {
        setTotalConfirmed(res.data.Global.TotalConfirmed);
        setTotalRecovered(res.data.Global.TotalRecovered);
        setTotalDeaths(res.data.Global.TotalDeaths);
        setCountryData(res.data.Countries);
        console.log(res.data);
      })
      .catch(() => console.log("error"));
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.globalData}>
        <Typography variant="h6">
          Total Confirmed Cases: {totalConfirmed ? totalConfirmed : null}
          <br />
          Total Recovered Cases: {totalRecovered ? totalRecovered : null}
          <br />
          Total Deaths: {totalDeaths ? totalDeaths : null}
        </Typography>
      </div>

      <GraphData />
      <CountryTableData data={countryData} />
    </div>
  );
}

export default CovidData;
