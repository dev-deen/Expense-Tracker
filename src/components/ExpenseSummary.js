import React from 'react'

function ExpenseSummary({expenses}) {
    const categoryTotals = expenses.reduce((totals, expense) =>{
        totals[expense.category] = (totals[expense.category] || 0) + expense.amount;
        return totals;
    }, {});
  return (
    <div>
      <h2>Expense Summary</h2>
      <ul>
        {Object.keys(categoryTotals).map((category)=>(
            <li key={category}>
                {category}: Rs. {categoryTotals[category].toFixed(2)}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default ExpenseSummary
