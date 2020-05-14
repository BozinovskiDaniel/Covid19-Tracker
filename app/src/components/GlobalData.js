import React from "react";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {},
  globalData: {
    margin: "0 50px 20px 50px",
  },
  totalItem1: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    borderBottom: "10px solid #8884d8",
  },
  totalItem2: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    borderBottom: "10px solid rgba(46, 204, 113, 1)",
  },
  totalItem3: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    borderBottom: "10px solid #ff726f",
  },
  graphDataContainer: {
    padding: "200px 0px",
  },
  smallerText: {
    color: "rgba(0, 0, 0, 0.5)",
  },
});

function GlobalData(props) {
  const classes = useStyles();

  return (
    <div className={classes.globalData}>
      <Grid container spacing={4}>
        <Grid item sm={4}>
          <Typography variant="h4" className={classes.totalItem1}>
            <Typography variant="body1" className={classes.smallerText}>
              Infected
            </Typography>
            {props.totalConfirmed
              ? props.totalConfirmed.toLocaleString()
              : null}
            <Typography variant="body1" className={classes.smallerText}>
              {new Date(props.date).toString().slice(4, 15)}
            </Typography>
          </Typography>
        </Grid>
        <Grid item sm={4}>
          <Typography variant="h4" className={classes.totalItem2}>
            <Typography variant="body1" className={classes.smallerText}>
              Recovered
            </Typography>
            {props.totalRecovered
              ? props.totalRecovered.toLocaleString()
              : null}
            <Typography variant="body1" className={classes.smallerText}>
              {new Date(props.date).toString().slice(4, 15)}
            </Typography>
          </Typography>
        </Grid>
        <Grid item sm={4}>
          <Typography variant="h4" className={classes.totalItem3}>
            <Typography variant="body1" className={classes.smallerText}>
              Deaths
            </Typography>
            {props.totalDeaths ? props.totalDeaths.toLocaleString() : null}
            <Typography variant="body1" className={classes.smallerText}>
              {new Date(props.date).toString().slice(4, 15)}
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default GlobalData;
