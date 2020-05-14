import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    alignItems: "center",
    paddingTop: 30,
  },
  table: {
    fontFamily: "arial, sans-serif",
    borderCollapse: "collapse",
    width: "100%",
  },
  countryName: {},
});

function CountryTableData(props) {
  const classes = useStyles();
  const { data } = props;

  const handleClick = (countryName) => {
    console.log(props.history);
  };

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
            <td className={classes.countryName}>
              <Link to={`/country/${country.Country}`}>
                <Button variant="contained" color="primary">
                  {country.Country}
                </Button>
              </Link>
            </td>
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
