import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';

const Expenses = ({ expenses }) => {
	const [filteredYear, setFilteredYear] = useState('');

	const updateExpenseFilterHandler = value => {
		setFilteredYear(value);
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
