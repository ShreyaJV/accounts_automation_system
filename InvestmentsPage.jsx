// frontend/src/pages/InvestmentsPage.jsx
/*import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';

const InvestmentsPage = () => {
  const [investments, setInvestments] = useState([]);
  const [newInvestment, setNewInvestment] = useState({ company: '', amount: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/investment')
      .then(res => setInvestments(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = e => setNewInvestment({ ...newInvestment, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/investment', newInvestment)
      .then(res => setInvestments([...investments, res.data]))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Investments Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Company:</label>
          <input type="text" name="company" value={newInvestment.company} onChange={handleChange} required />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" name="amount" value={newInvestment.amount} onChange={handleChange} required />
        </div>
        <button type="submit">Add Investment</button>
      </form>
      <ul>
        {investments.map(inv => (
          <li key={inv._id}>{inv.company}: ${inv.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default InvestmentsPage;*/


// frontend/src/pages/InvestmentsPage.jsx
import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';

const InvestmentsPage = () => {
  const [investments, setInvestments] = useState([]);
  const [newInvestment, setNewInvestment] = useState({ company: '', amount: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/investment')
      .then(res => setInvestments(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = e => setNewInvestment({ ...newInvestment, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/investment', newInvestment)
      .then(res => setInvestments([...investments, res.data]))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Investments Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Company:</label>
          <input type="text" name="company" value={newInvestment.company} onChange={handleChange} required />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" name="amount" value={newInvestment.amount} onChange={handleChange} required />
        </div>
        <button type="submit">Add Investment</button>
      </form>
      <ul>
        {investments.map(inv => (
          <li key={inv._id}>{inv.company}: Rs. {inv.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default InvestmentsPage;


