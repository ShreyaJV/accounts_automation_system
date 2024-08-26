// components/Register.jsx
/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/Register', formData);
      localStorage.setItem('token', res.data.token);
      alert('Registration successful');
      navigate('/Login');
    } catch (err) {
      console.error(err.response.data);
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={onChange} required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={onChange} required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={onChange} required />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;*/

// components/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/Register', formData);
      localStorage.setItem('token', res.data.token);
      alert('Registration successful');
      navigate('/Login');
    } catch (err) {
      console.error(err.response.data);
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={onChange} required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={onChange} required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={onChange} required />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;