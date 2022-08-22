import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  //every data point will be an object that has label and value
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  //cycle through each expense on our props.expenses
  for (const expense of props.expenses) {
    //Extract month from each expense to use as an index (0 to 11)
    const ExpenseMonth = expense.date.getMonth();
    //Insert month as an index for our chartDataPoints, and insert the amount, which is also extracted from props.expenses
    chartDataPoints[ExpenseMonth].value += expense.amount;
  }

  //send chartDataPoints as a prop to Chart
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
