// AuthContext.jsx

/*import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on initial load
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get('/api/auth', {
          headers: { 'x-auth-token': token },
        })
        .then((res) => {
          setUser(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          localStorage.removeItem('token');
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/Login', { email, password });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
    } catch (err) {
      console.error(err);
      throw new Error(err.response.data.errors[0].msg);
    }
  };

  const register = async (username, email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/Register', { username, email, password });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
    } catch (err) {
      console.error(err);
      throw new Error(err.response.data.errors[0].msg);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuth hook
export const useAuth = () => useContext(AuthContext);*/

// AuthContext.jsx

import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on initial load
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get('/api/auth', {
          headers: { 'x-auth-token': token },
        })
        .then((res) => {
          setUser(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          localStorage.removeItem('token');
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/Login', { email, password });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
    } catch (err) {
      console.error(err);
      throw new Error(err.response.data.errors[0].msg);
    }
  };

  const register = async (username, email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/Register', { username, email, password });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
    } catch (err) {
      console.error(err);
      throw new Error(err.response.data.errors[0].msg);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuth hook
export const useAuth = () => useContext(AuthContext);

