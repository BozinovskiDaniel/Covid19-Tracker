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
  totalItem: {
    backgroundColor: "#eee",
    borderRadius: 10,
    padding: 10,
  },
  graphDataContainer: {
    padding: "200px 0px",
  },
});

function GlobalData(props) {
  const classes = useStyles();

  return (
    <div className={classes.globalData}>
      <Grid container spacing={1}>
        <Grid item sm={4} className={classes.totalItem}>
          <Typography variant="h6">
            Total Confirmed Cases: <br />
            {props.totalConfirmed ? props.totalConfirmed : null}
          </Typography>
        </Grid>
        <Grid item sm={4}>
          <Typography variant="h6" className={classes.totalItem}>
            Total Recovered Cases: <br />
            {props.totalRecovered ? props.totalRecovered : null}
          </Typography>
        </Grid>
        <Grid item sm={4}>
          <Typography variant="h6" className={classes.totalItem}>
            Total Death Cases: <br />
            {props.totalDeaths ? props.totalDeaths : null}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default GlobalData;
