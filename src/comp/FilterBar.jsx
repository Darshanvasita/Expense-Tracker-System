import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const FilterBar = () => {
  const { filterExpenses } = useContext(GlobalContext);
  const [category, setCategory] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleFilter = () => {
    filterExpenses({ category, dateRange, paymentMethod });
  };

  return (
    <div>
      <h3>Filters</h3>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date Range"
        value={dateRange}
        onChange={(e) => setDateRange(e.target.value)}
      />
      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="">Payment Method</option>
        <option value="cash">Cash</option>
        <option value="credit">Credit</option>
      </select>
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default FilterBar;
