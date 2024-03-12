// StockList.jsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const StockList = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await api.get('/stock');
        setStocks(response.data);
      } catch (error) {
        // Handle fetch stocks error
        console.error('Failed to fetch stocks', error);
      }
    };

    fetchStocks();
  }, []);

  return (
    <div className="card p-3">
      <h2>Stocks</h2>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.symbol}>{`${stock.name} - ${stock.symbol}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;
