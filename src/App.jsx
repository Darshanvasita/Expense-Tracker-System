import React from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import { Header } from './comp/Header';
import { Balance } from './comp/Balance';
import { IncomeExpenses } from './comp/IncomeExpenses';
import { TransactionList } from './comp/TransactionList';
import { AddTransaction } from './comp/AddTransaction';

function App() {
  return (
    <GlobalProvider>
    <Header/>
    <div className="container">
     <Balance/>
     <IncomeExpenses/>
     <TransactionList/> 
     <AddTransaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;
