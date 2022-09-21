import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses }) => {
	const [filteredYear, setFilteredYear] = useState('2022');

	const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear)

	return (
		<div className="expenses">
			<ExpensesFilter
				onUpdateExpenseFilter={(value) => setFilteredYear(value)}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList expenses={filteredExpenses} />
		</div>
	);
};

export default Expenses;
