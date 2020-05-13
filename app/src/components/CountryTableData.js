import React, { useEffect } from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    alignItems: "center",
  },
  table: {
    fontFamily: "arial, sans-serif",
    borderCollapse: "collapse",
    width: "100%",
  },
});

function CountryTableData(props) {
  const classes = useStyles();
  const { data } = props;

  let countryDataMarkup = data ? (
    // Map over each country and call the country component
    <table className={classes.table}>
      <tr>
        <th>Country</th>
        <th>Total Confirmed</th>
        <th>Total Recovered</th>
        <th>Total Deaths</th>
        <th>New Confirmed</th>
        <th>New Recovered</th>
        <th>New Deaths</th>
      </tr>
      {data.map((country) => {
        return (
          <tr>
            <td>{country.Country}</td>
            <td>{country.TotalConfirmed}</td>
            <td>{country.TotalRecovered}</td>
            <td>{country.TotalDeaths}</td>
            <td>{country.NewConfirmed}</td>
            <td>{country.NewRecovered}</td>
            <td>{country.NewDeaths}</td>
          </tr>
        );
      })}
    </table>
  ) : null;

  return <div className={classes.root}>{countryDataMarkup}</div>;
}

export default CountryTableData;
