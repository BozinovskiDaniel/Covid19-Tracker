import React, { Fragment } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// Material UI
import { makeStyles } from "@material-ui/core/styles";

// Recharts

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
});

function GraphData(props) {
  const classes = useStyles();

  const renderAreaChart = (
    <div className={classes.root}>
      <AreaChart
        width={1200}
        height={400}
        data={props.data}
        margin={{
          top: 50,
          right: 50,
          left: 50,
          bottom: 50,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="confirmed"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="recovered"
          stackId="2"
          stroke="rgba(46, 204, 113, 1)"
          fill="rgba(46, 204, 113, 0.75)"
        />
        <Area
          type="monotone"
          dataKey="deaths"
          stackId="3"
          stroke="#ff726f"
          fill="#ff726f"
        />
      </AreaChart>
    </div>
  );

  return props.data ? renderAreaChart : null;
}

export default GraphData;
