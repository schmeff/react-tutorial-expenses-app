import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

import './Expenses.css';

const Expenses = ({ expenses }) => {
	const [filteredYear, setFilteredYear] = useState('2022');

	const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear)

	return (
		<div className="expenses">
			<ExpensesFilter
				onUpdateExpenseFilter={(value) => setFilteredYear(value)}
			/>
			<ExpensesList expenses={filteredExpenses} />
		</div>
	);
};

export default Expenses;
