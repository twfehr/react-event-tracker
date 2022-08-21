import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
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

  //**Recreate final object with date converted */
  //automatically receive event object
  const submitHandler = (event) => {
    //prevent default refreshing of page
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      //+ converts input from a string to a number
      amount: +userInput.enteredAmount,
      //parse date string and convert it into a date object
      date: new Date(userInput.enteredDate),
    };
    //call the prop that we passed into this component which contains the function, while passing expenseData as an argument.
    props.onSaveExpenseData(expenseData);

    setUserInput({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        {/* button type is button so it doesn't submit form, executes function in NewExpense.js */}
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
