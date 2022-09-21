import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css'

const ExpensesList = ({ expenses }) => {
	if (expenses.length === 0) {
		return <p className="expenses-list__fallback">No expenses found</p>;
	}

	if (expenses.length > 0) {
			<div className="expenses-list">
				{expenses.map((expense) => (
					<ExpenseItem key={expense.id} info={expense} />
				))}
			</div>
	}

	return <ul className="expenses-list">
		{
			expenses.map(expense => <ExpenseItem key={expense.id} info={expense} />)
		}
	</ul>
};

export default ExpensesList;
