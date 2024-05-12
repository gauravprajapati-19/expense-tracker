import React from "react";
// import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const expenseDate = new Date(2022, 10, 19);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 200;

  // title = name of the thing which we want to change
  // setTitle = what we are setting
  // useState(props.title) = targets the thing which we want to change

  // To change the existing title
  // const [title, setTitle] = useState(props.title);
  // console.log("ExpenseItem Evaluated by React!");
  // const clickHandler = () => {
  //   setTitle("Ho gaya Bhai!");
  //   console.log(title);
  // };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item_description'>
        <h1>{props.title}</h1>
        <div className='expense-item_price'>${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Click Here!</button> */}
    </Card>
  );
}

export default ExpenseItem;
