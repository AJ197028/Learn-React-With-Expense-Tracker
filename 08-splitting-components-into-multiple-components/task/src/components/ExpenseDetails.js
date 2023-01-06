import './ExpenseItem.css';

function ExpenseDetails(props) {
    
    
    return( 
        <div className='expense-item__description'>
            <h2>{props.amount[0]}</h2>
            <div className='expense-item__price'>${props.amount[1]}</div>
        </div> 
    );
}

export default ExpenseDetails;