import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryTableData from "./CountryTableData";
import GraphData from "./GraphData";
import GlobalData from "./GlobalData";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {},
  globalData: {
    margin: "0 50px 20px 50px",
  },
  totalItem: {
    backgroundColor: "#eee",
    borderRadius: 10,
    padding: 10,
  },
  graphDataContainer: {
    padding: "200px 0px",
  },
});

function CovidData(props) {
  const classes = useStyles();
  const [totalConfirmed, setTotalConfirmed] = useState(null);
  const [totalRecovered, setTotalRecovered] = useState(null);
  const [totalDeaths, setTotalDeaths] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const data = [
    { name: "01/01/2020", uv: 400 },
    { name: "02/02/2020", uv: 500 },
  ];

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
      <GlobalData
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
      />
      <GraphData data={data} className={classes.graphDataContainer} />
      <CountryTableData data={countryData} />
    </div>
  );
}

export default CovidData;
