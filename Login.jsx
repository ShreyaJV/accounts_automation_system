// components/Login.jsx
/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/Login', formData);
      localStorage.setItem('token', res.data.token);
      alert('Login successful');
      navigate('/');
      // window.location.href = '/ExpenditurePage';
    } catch (err) {
      console.error(err.response.data);
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={onChange} required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={onChange} required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;*/

// components/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/Login', formData);
      localStorage.setItem('token', res.data.token);
      alert('Login successful');
      navigate('/');
      // window.location.href = '/ExpenditurePage';
    } catch (err) {
      console.error(err.response.data);
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={onChange} required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={onChange} required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;


