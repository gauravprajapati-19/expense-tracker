import ExpenseItem from "./ExpenseItem";

const ExpensesList = props => {
    // var expensesContent = <p>No Expenses Found for this Year</p>;
    if (props.items.length === 0) {
        return (<h2>No Expenses Found for this Year</h2>)
    }

    return (<div>
        {props.items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))}</div>
    )
};

export default ExpensesList;