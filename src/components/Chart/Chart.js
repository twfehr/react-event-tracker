import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  //transform our datapoint object to the number stored in datapoint.value; creates array called dataPointValues
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  //find maximum dataPoint using spread operator to extract array elements from array; each element from array becomes standalone argument for max method
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {/* create as many chartbars as there are data points; send value prop to ChartBar component bc every data point will have a value; also pass max value so data point's value is in relation to something (it is null bc we don't extract this info) */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
