import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import GraphData from "./GraphData";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  graph: {
    padding: 100,
  },
});

function IndividualCountryData(props) {
  const [data, setData] = useState(null);
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
            uv: i.Confirmed,
          };
          array.push(newObj);
        });
        console.log(array);
        setData(array);
      })
      .catch(() => console.log("error"));
  }, []);

  let countryDataMarkup = data ? (
    <Fragment>
      <Typography variant="h3">{props.name}</Typography>
      <GraphData className={classes.graph} data={data} />
    </Fragment>
  ) : null;

  return <Fragment>{countryDataMarkup}</Fragment>;
}

export default IndividualCountryData;
