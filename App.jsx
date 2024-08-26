// App.jsx
/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ExpenditurePage from './pages/ExpenditurePage';
import StocksPage from './pages/StocksPage';
import PaymentsPage from './pages/PaymentsPage';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/ProfilePage">Profile</a></li>
              <li><a href="/ExpenditurePage">Expenditure</a></li>
              <li><a href="/StocksPage">Stocks</a></li>
              <li><a href="/PaymentsPage">Payments</a></li>
              <li><a href="/Login">Login</a></li>
              <li><a href="/Register">Register</a></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />
            <Route path="/ExpenditurePage" element={<ExpenditurePage />} />
            <Route path="/StocksPage" element={<StocksPage />} />
            <Route path="/PaymentsPage" element={<PaymentsPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;*/


// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ExpenditurePage from './pages/ExpenditurePage';
import InvestmentsPage from './pages/InvestmentsPage';
import PaymentsPage from './pages/PaymentsPage';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/ProfilePage">Profile</a></li>
              <li><a href="/ExpenditurePage">Expenditure</a></li>
              <li><a href="/InvestmentsPage">Investments</a></li>
              <li><a href="/PaymentsPage">Payments</a></li>
              <li><a href="/Login">Login</a></li>
              <li><a href="/Register">Register</a></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/ProfilePage" element={<ProfilePage />} />
            <Route path="/ExpenditurePage" element={<ExpenditurePage />} />
            <Route path="/InvestmentsPage" element={<InvestmentsPage />} />
            <Route path="/PaymentsPage" element={<PaymentsPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;