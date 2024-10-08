import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (text.trim() === '' || amount === 0) {
      alert('Please enter both text and a valid amount');
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount // Convert string input to number
    };

    // Call the addTransaction function
    addTransaction(newTransaction);

    // Clear inputs after submission
    setText('');
    setAmount(0);
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter description..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))} // Ensure it's a number
            placeholder="Enter amount... " required 
            
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};
