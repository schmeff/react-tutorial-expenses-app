import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';

const Expenses = ({ expenses }) => {
	const [expenseFilter, setExpenseFilter] = useState('');

	const updateExpenseFilterHandler = value => {
		setExpenseFilter(value);
	}

	return (
		<div className='expenses'>
			<ExpensesFilter onUpdateExpenseFilter={updateExpenseFilterHandler} />
			<div>
				{expenses.map((expense) => {
					return <ExpenseItem key={expense.id} info={expense} />;
				})}
			</div>
		</div>
	);
};

export default Expenses;
