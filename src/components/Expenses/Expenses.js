import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';

const Expenses = ({ expenses }) => {
	const [filteredExpenses, setFilteredExpenses] = useState(expenses);

	const updateExpenseFilterHandler = (value) => {
		setFilteredExpenses(() =>
			expenses.filter(
				(expense) => expense.date.getFullYear().toString() === value
			)
		);
	};

	return (
		<div className="expenses">
			<ExpensesFilter
				onUpdateExpenseFilter={updateExpenseFilterHandler}
			/>
			<div>
				{filteredExpenses.map((expense) => (
					<ExpenseItem key={expense.id} info={expense} />
				))}
			</div>
		</div>
	);
};

export default Expenses;
