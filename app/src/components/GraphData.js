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

const useStyles = makeStyles({});

function GraphData(props) {
  const classes = useStyles();

  const renderAreaChart = (
    <AreaChart
      width={800}
      height={400}
      data={props.data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );

  return <Fragment>{renderAreaChart}</Fragment>;
}

export default GraphData;
