import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryTableData from "./CountryTableData";
import GraphData from "./GraphData";

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
        <Grid container spacing={1}>
          <Grid item sm={4} className={classes.totalItem}>
            <Typography variant="h6">
              Total Confirmed Cases: <br />
              {totalConfirmed ? totalConfirmed : null}
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <Typography variant="h6" className={classes.totalItem}>
              Total Recovered Cases: <br />
              {totalRecovered ? totalRecovered : null}
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <Typography variant="h6" className={classes.totalItem}>
              Total Death Cases: <br />
              {totalDeaths ? totalDeaths : null}
            </Typography>
          </Grid>
        </Grid>
      </div>

      <GraphData />
      <CountryTableData data={countryData} />
    </div>
  );
}

export default CovidData;
