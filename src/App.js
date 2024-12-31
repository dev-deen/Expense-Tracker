import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) =>{
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense}/>
      <ExpenseList expenses={expenses}/>
      <ExpenseSummary expenses={expenses}/>
    </div>
  );
}

export default App;
