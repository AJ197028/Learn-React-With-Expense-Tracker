import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';


function ExpenseItem(props) {
    
    return(

        <div className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails amount={props.amount}></ExpenseDetails>
            
        </div>
    );
}
export default ExpenseItem;


