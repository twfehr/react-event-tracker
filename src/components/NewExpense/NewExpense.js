import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  //function expects to get enteredExpenseData as a parameter
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      //pull out all key:value pairs and add them to this object
      ...enteredExpenseData,
      //add in new id key (do not use math.random in real app)
      id: Math.random().toString(),
    };
    //call prop that has the function we made inside of App.js, pass expenseData as an argument
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
