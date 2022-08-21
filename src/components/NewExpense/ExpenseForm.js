import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //first element is pointer to managed data [value inside of useState, which is an object]
  //second element is function that sets new value
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    //prevState is previous state key value pairs passed into anonymous function
    setUserInput((prevState) => {
      //preserve old state object and overwrite enteredTitle
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    //prevState is previous state key value pairs passed into anonymous function
    setUserInput((prevState) => {
      //preserve old state object and overwrite enteredAmount
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    //prevState is previous state key value pairs passed into anonymous function
    setUserInput((prevState) => {
      //preserve old state object and overwrite enteredDate
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
