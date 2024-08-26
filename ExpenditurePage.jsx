// pages/ExpenditurePage.jsx
// frontend/src/pages/ExpenditurePage.jsx
import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';

const ExpenditurePage = () => {
  const [expenditures, setExpenditures] = useState([]);
  const [newExpenditure, setNewExpenditure] = useState({ category: '', amount: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/expenditure')
      .then(res => setExpenditures(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = e => setNewExpenditure({ ...newExpenditure, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/expenditure', newExpenditure)
      .then(res => setExpenditures([...expenditures, res.data]))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Expenditure Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category:</label>
          <input type="text" name="category" value={newExpenditure.category} onChange={handleChange} required />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" name="amount" value={newExpenditure.amount} onChange={handleChange} required />
        </div>
        <button type="submit">Add Expenditure</button>
      </form>
      <ul>
        {expenditures.map(exp => (
          <li key={exp._id}>{exp.category}: Rs. {exp.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenditurePage;


