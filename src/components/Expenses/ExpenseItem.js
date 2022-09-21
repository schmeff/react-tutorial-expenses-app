import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';

const ExpenseItem = ({ info }) => {
	return (
		<li className="expense-item">
			<ExpenseDate date={info.date} />
			<div className="expense-item__description">
				<h2>{info.title}</h2>
				<div className="expense-item__price">${info.amount}</div>
			</div>
		</li>
	);
};

export default ExpenseItem;
