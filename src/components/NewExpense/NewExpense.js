import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, SetIsEditing] = useState(false);

  const startEditingHandler = () => {
    SetIsEditing(true);
  };

  const stopEditingHandler = () => {
    SetIsEditing(false);
  };

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
    //close form when submitted
    SetIsEditing(false);
  };

  return (
    <div className="new-expense">
      {/* could have worked with an if-check with variable w default value, or used a ternary expression to conditionally render button*/}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
