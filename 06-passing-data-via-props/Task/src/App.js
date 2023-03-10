import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      locationOfExpenditure: "Nagpur"
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12), locationOfExpenditure: "Pune" },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      locationOfExpenditure: "Mumbai"
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      locationOfExpenditure: "Bengaluru"
    },
  ];

  return (
    <div>
     {
        expenses.map((i) =>
        <ExpenseItem Title={i.title}
        Amount={i.amount}
        Date={i.date}
        LocationOfExpenditure={i.locationOfExpenditure}
        ></ExpenseItem>
        )
      }    
    </div>
  )
}

export default App;
