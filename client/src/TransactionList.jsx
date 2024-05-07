import React, { useEffect, useState } from 'react';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await fetch('/transactions');
      console.log('Response:', response);
      const text = await response.text();
      console.log('Response Body:', text);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = JSON.parse(text);
      setTransactions(data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };
  

  return (
    <div>
      <h1>Transaction List</h1>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.type} - {transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;