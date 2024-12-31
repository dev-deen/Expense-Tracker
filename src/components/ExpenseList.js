import React from 'react'

function ExpenseList({expenses}) {
  return (
    <div>
      <h2>Expense List</h2>
      {expenses.length === 0 ?(
        <p>No Expense to show!</p>
      ):
      (
        <ul>
            {expenses.map((expense, index)=>{
                return (
                    <li key={index}>
                        {expense.description}  ${expense.amount} [{expense.category}]
                    </li>
                )
            })}
        </ul>
      )}
    </div>
  )
}

export default ExpenseList;
