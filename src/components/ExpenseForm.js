import React, { useState } from 'react';

function ExpenseForm({addExpense}) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!description || !amount || !category){
        alert('Please fill all fields');
        return;
    }
    addExpense({description, amount: parseFloat(amount), category});
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
       <div>
        <input type="text" 
        placeholder="Enter description"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
        />
      </div>
      <div>
        <input type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
        />

       </div>

       <div>
          <select 
          value={category} 
          onChange={(e)=>setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Rent">Rent</option>
            <option value="Clothing">Clothing</option>
            <option value="Gym">Gym</option>
            <option value="Travel">Travel</option>
            <option value="Other">Other</option>
          </select>

       </div>

       <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
