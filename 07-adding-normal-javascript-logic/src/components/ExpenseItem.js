import './ExpenseItem.css';

function ExpenseItem(props) {
    const month = props.Date.toLocaleString('en-US', { month: 'long' });
    const day = props.Date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.Date.getFullYear();
    return(

        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.Title}</h2>
                <div className='expense-item__price'>${props.Amount}</div>
            </div> 
            
        </div>
    );
}
export default ExpenseItem;


