import React from 'react';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/SignUp';
import { useNavigate } from "react-router";

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <Login />
  

      <header className="App-header">
        <h1>Welcome to Expense Tracker</h1>
        <p>Manage your finances effortlessly.</p>
        <button onClick={() => navigate('/login')}>Get Started</button>
        <button onClick={() => navigate('/signup')}>Sign Up</button>
      </header>

      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Track expenses and income</li>
          <li>Set savings goals</li>
          <li>Analyze spending patterns</li>
        </ul>
      </section>

      <footer className="App-footer">
        <p>&copy; 2025 Expense Tracker. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
