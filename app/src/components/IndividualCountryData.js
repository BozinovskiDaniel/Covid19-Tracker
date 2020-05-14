import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import GraphData from "./GraphData";
import GlobalData from "./GlobalData";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  graph: {
    padding: 100,
  },
  countryName: {
    textAlign: "center",
    padding: "50px 0",
  },
});

function IndividualCountryData(props) {
  const [data, setData] = useState(null);
  const [totalConfirmed, setTotalConfirmed] = useState(null);
  const [totalRecovered, setTotalRecovered] = useState(null);
  const [totalDeaths, setTotalDeaths] = useState(null);
  const [date, setDate] = useState(null);

  const classes = useStyles();
  useEffect(() => {
    const url = "https://api.covid19api.com/total/country/" + props.name;
    axios
      .get(url)
      .then((res) => {
        let array = [];

        res.data.map((i) => {
          let newObj = {
            name: new Date(i.Date).toString().slice(4, 15),
            confirmed: i.Confirmed,
            recovered: i.Recovered,
            deaths: i.Deaths,
          };
          array.push(newObj);
        });
        setDate(array[array.length - 1].name);
        setTotalConfirmed(array[array.length - 1].confirmed);
        setTotalRecovered(array[array.length - 1].recovered);
        setTotalDeaths(array[array.length - 1].deaths);
        setData(array);
      })
      .catch(() => console.log("error"));
  }, [props.name]);

  let countryDataMarkup = data ? (
    <Fragment>
      <Typography variant="h3" className={classes.countryName}>
        {props.name}
      </Typography>
      <GlobalData
        date={date}
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
      />
      <GraphData className={classes.graph} data={data} />
    </Fragment>
  ) : null;

  return <Fragment>{countryDataMarkup}</Fragment>;
}

export default IndividualCountryData;
