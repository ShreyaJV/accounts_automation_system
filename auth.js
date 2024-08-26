// src/utils/auth.js

/*import jwtDecode from 'jwt-decode';

export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Current time in seconds
    if (decodedToken.exp < currentTime) {
      // Token has expired
      localStorage.removeItem('token');
      return false;
    }
    return true;
  } catch (error) {
    // Token is invalid
    localStorage.removeItem('token');
    return false;
  }
};*/


import jwtDecode from 'jwt-decode';

export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Current time in seconds
    if (decodedToken.exp < currentTime) {
      // Token has expired
      localStorage.removeItem('token');
      return false;
    }
    return true;
  } catch (error) {
    // Token is invalid
    localStorage.removeItem('token');
    return false;
  }
};

