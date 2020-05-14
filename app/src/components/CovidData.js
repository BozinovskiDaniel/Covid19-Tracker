import React, { useState, useEffect } from "react";
import axios from "axios";
import GraphData from "./GraphData";
import GlobalData from "./GlobalData";
import TableData from "./TableData";

// Material UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
  globalData: {
    margin: "0 50px 20px 50px",
  },
  totalItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  table: {
    marginTop: 15,
  },
  textField: {
    width: "50%",
    marginTop: 25,
  },
});

function CovidData(props) {
  const classes = useStyles();
  const [totalConfirmed, setTotalConfirmed] = useState(null);
  const [totalRecovered, setTotalRecovered] = useState(null);
  const [totalDeaths, setTotalDeaths] = useState(null);
  const [date, setDate] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => {
        setDate(res.data.Date);
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
        date={date}
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
      />
      <GraphData data={data} className={classes.graphDataContainer} />
      {countryData ? (
        <div className={classes.table}>
          <TableData data={countryData} className={classes.table} />
        </div>
      ) : null}
    </div>
  );
}

export default CovidData;
