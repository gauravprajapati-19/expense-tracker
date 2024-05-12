import React, { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/New Expenses/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 200,
    date: new Date(2023, 11, 19),
  },
  {
    id: "e2",
    title: "Bike Insurance",
    amount: 300,
    date: new Date(2023, 10, 15),
  },
  {
    id: "e3",
    title: "Home Insurance",
    amount: 400,
    date: new Date(2024, 11, 13),
  },
  {
    id: "e4",
    title: "Life Insurance",
    amount: 500,
    date: new Date(2024, 10, 11),
  },
  {
    id: "e5",
    title: "My Insurance",
    amount: 700,
    date: new Date(2024, 7, 11),
  },
  {
    id: "e6",
    title: "My Insurance",
    amount: 500,
    date: new Date(2023, 4, 11),
  },
  {
    id: "e7",
    title: "Healthcare Expenses",
    amount: 120,
    date: new Date(2022, 3, 11),
  },
  {
    id: "e8",
    title: "Travel Expenses",
    amount: 250,
    date: new Date(2021, 8, 11),
  },
  {
    id: "e9",
    title: "Groceries",
    amount: 150,
    date: new Date(2020, 6, 11),
  },
  {
    id: "e10",
    title: "Rent",
    amount: 1000,
    date: new Date(2024, 2, 11),
  },
  {
    id: "e11",
    title: "Pet Supplies",
    amount: 80,
    date: new Date(2022, 1, 11),
  },
  {
    id: "e12",
    title: "Electronics",
    amount: 320,
    date: new Date(2023, 9, 11),
  },
  {
    id: "e13",
    title: "Dining Out",
    amount: 80,
    date: new Date(2021, 5, 11),
  },
  {
    id: "e14",
    title: "Home Maintenance",
    amount: 200,
    date: new Date(2020, 4, 11),
  },
  {
    id: "e15",
    title: "Entertainment",
    amount: 150,
    date: new Date(2022, 11, 11),
  },
  {
    id: "e16",
    title: "Education",
    amount: 350,
    date: new Date(2023, 7, 11),
  },
  {
    id: "e17",
    title: "Utilities",
    amount: 180,
    date: new Date(2021, 2, 11),
  },
  {
    id: "e18",
    title: "Clothing",
    amount: 100,
    date: new Date(2020, 10, 11),
  },
  {
    id: "e19",
    title: "Gifts",
    amount: 50,
    date: new Date(2022, 8, 11),
  },
  {
    id: "e20",
    title: "Charity Donation",
    amount: 50,
    date: new Date(2024, 0, 11),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className='App'>
      <h1>EXPENSE TRACKER</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
