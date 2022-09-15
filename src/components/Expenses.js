import ExpenseItem from "./ExpenseItem";

import './Expenses.css';

const Expenses = ({ expenses }) => {
	return (
		<div className="expenses">
			{expenses.map((expense) => {
				return <ExpenseItem key={expense.id} info={expense} />;
			})}
		</div>
	);
};

export default Expenses;
