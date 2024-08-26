import { Link } from 'react-router-dom';

const NavigationBar = () => (
  <nav>
    <Link to="/">HomePage</Link>
    <Link to="/ProfilePage">Profile</Link>
    <Link to="/ExpenditurePage">Expenditure</Link>
    <Link to="/StocksPage">Investments</Link>
    <Link to="/PaymentsPage">Payments</Link>
    <Link to="/Login">Login</Link>
    <Link to="/Register">Register</Link>
  </nav>
);

export default NavigationBar;
