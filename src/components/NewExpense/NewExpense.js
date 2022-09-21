import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
	const [showAddForm, setShowAddForm] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		onAddExpense(expenseData);
		setShowAddForm(false);
	};

	const cancelAddExpenseHandler = () => setShowAddForm(false);

	if (!showAddForm) {
		return <div className="new-expense">
			<button onClick={() => setShowAddForm(true)}>Add New Expense</button>
		</div>
	}

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={ cancelAddExpenseHandler } />
		</div>
	);
};

export default NewExpense;
