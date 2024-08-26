// src/pages/PaymentsPage.jsx
// frontend/src/pages/PaymentsPage.jsx
/*import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';

const PaymentsPage = () => {
  const [payments, setPayments] = useState([]);
  const [newPayment, setNewPayment] = useState({ source: '', amount: '', dueDate: '', status: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/payments')
      .then(res => setPayments(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = e => setNewPayment({ ...newPayment, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/payments', newPayment)
      .then(res => setPayments([...payments, res.data]))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Payments Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Source:</label>
          <input type="text" name="source" value={newPayment.source} onChange={handleChange} required />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" name="amount" value={newPayment.amount} onChange={handleChange} required />
        </div>
        <div>
          <label>Due Date:</label>
          <input type="date" name="dueDate" value={newPayment.dueDate} onChange={handleChange} required />
        </div>
        <div>
          <label>Status:</label>
          <input type="text" name="status" value={newPayment.status} onChange={handleChange} required />
        </div>
        <button type="submit">Add Payment</button>
      </form>
      <ul>
        {payments.map(pay => (
          <li key={pay._id}>{pay.source}: ${pay.amount} - {pay.dueDate} ({pay.status})</li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentsPage;*/

// frontend/src/pages/PaymentsPage.jsx
import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';

const PaymentsPage = () => {
  const [payments, setPayments] = useState([]);
  const [newPayment, setNewPayment] = useState({ source: '', amount: '', dueDate: '', status: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/payment')
      .then(res => setPayments(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = e => setNewPayment({ ...newPayment, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/payment', newPayment)
      .then(res => setPayments([...payments, res.data]))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Payments Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Source:</label>
          <input type="text" name="source" value={newPayment.source} onChange={handleChange} required />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" name="amount" value={newPayment.amount} onChange={handleChange} required />
        </div>
        <div>
          <label>Due Date:</label>
          <input type="date" name="dueDate" value={newPayment.dueDate} onChange={handleChange} required />
        </div>
        <div>
          <label>Status:</label>
          <input type="text" name="status" value={newPayment.status} onChange={handleChange} required />
        </div>
        <button type="submit">Add Payment</button>
      </form>
      <ul>
        {payments.map(pay => (
          <li key={pay._id}>{pay.source}: Rs. {pay.amount} - {pay.dueDate} ({pay.status})</li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentsPage;


