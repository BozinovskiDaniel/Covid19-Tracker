import React from "react";
import MaterialTable from "material-table";

function TableData(props) {
  const [state] = React.useState({
    columns: [
      { title: "Country", field: "Country" },
      { title: "Total Confirmed", field: "TotalConfirmed", type: "numeric" },
      { title: "Total Recovered", field: "TotalRecovered", type: "numeric" },
      {
        title: "Total Deaths",
        field: "TotalDeaths",
        type: "numeric",
      },
      {
        title: "New Confirmed",
        field: "NewConfirmed",
        type: "numeric",
      },
      {
        title: "New Recovered",
        field: "NewRecovered",
        type: "numeric",
      },
      {
        title: "New Deaths",
        field: "NewDeaths",
        type: "numeric",
      },
    ],
  });

  const myFunction = (event, rowData) => {
    window.open(`/country/${rowData.Country}`);
  };

  return (
    <MaterialTable
      title="Country Covid Stats"
      columns={state.columns}
      data={props.data}
      onRowClick={(event, rowData) => myFunction(event, rowData)}
    />
  );
}

export default TableData;
