/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState({
    name: '',
    account: '',
    email: '',
    phone: '',
    balance: 0
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/auth/profile', {
        headers: { 'x-auth-token': token },
      });
      setProfile(res.data);
    };
    fetchProfile();
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {profile.name}</p>
      <p>Account: {profile.account}</p>
      <p>Email: {profile.email}</p>
      <p>Phone: {profile.phone}</p>
      <p>Account Balance: ${profile.balance}</p>
      <button>Edit Profile</button>
    </div>
  );
};

export default ProfilePage;*/

// import React, { useState, useEffect } from 'react';
// import axios from '../utils/axios';

// const PaymentsPage = () => {
//   const [payments, setPayments] = useState([]);
//   const [newPayment, setNewPayment] = useState({ source: '', amount: '', dueDate: '', status: '' });

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/payment')
//       .then(res => setPayments(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   const handleChange = e => setNewPayment({ ...newPayment, [e.target.name]: e.target.value });

//   const handleSubmit = e => {
//     e.preventDefault();
//     axios.post('http://localhost:5000/api/payment', newPayment)
//       .then(res => setPayments([...payments, res.data]))
//       .catch(err => console.error(err));
//   };

//   return (
//     <div>
//       <h1>Payments Page</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Source:</label>
//           <input type="text" name="source" value={newPayment.source} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Amount:</label>
//           <input type="number" name="amount" value={newPayment.amount} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Due Date:</label>
//           <input type="date" name="dueDate" value={newPayment.dueDate} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Status:</label>
//           <input type="text" name="status" value={newPayment.status} onChange={handleChange} required />
//         </div>
//         <button type="submit">Add Payment</button>
//       </form>
//       <ul>
//         {payments.map(pay => (
//           <li key={pay._id}>{pay.source}: Rs. {pay.amount} - {pay.dueDate} ({pay.status})</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PaymentsPage;
// frontend/src/pages/ProfilePage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {
  const { user, setUser } = useAuth();
  const [profile, setProfile] = useState({name: '', emailid: '', dob: '', accno: '' });

  useEffect(() => {
    if (user) {
      axios.get(`http://localhost:5000/api/users/${user.id}`)
        .then(res => setProfile(res.data))
        .catch(err => console.error(err));
    }
  }, [user]);

  const handleChange = e => setProfile({ ...name, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/users', profile)
      .then(res => setProfile([...name, res.data]))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={profile.name} onChange={handleChange} required />
        </div>
        <div>
          <label>EMAIL ID:</label>
          <input type="text" name="emailid" value={profile.emailid} onChange={handleChange} required />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="text" name="dob" value={profile.dob} onChange={handleChange} required />
        </div>
        <div>
          <label>Account Number:</label>
          <input type="text" name="accno" value={profile.accno} onChange={handleChange} required />
        </div>
        <button type="submit">Add Profile</button>
      </form>
    </div>
  );
};

export default ProfilePage;
