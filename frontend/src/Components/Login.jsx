import React from 'react'
import '../styles/Login.css';
import { useNavigate } from "react-router";
import { useState } from 'react';

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // To store validation errors


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    if (!email || !password) {
      console.log('Email and Password are required!');
      alert('Email and Password are required!');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      console.log('Invalid email format!');
      alert('Invalid email format!');
      return;
    }
  
    setError(''); // Clear errors if validation passes
    alert('Login successful!'); // Display popup message
    console.log(`Email: ${email}, Password: ${password}`);
    navigate('/Dashboard');
    };

  return (
    <div>
      
      <h1>Login</h1>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit}>

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>

          <button type="submit">Login</button>
          <button onClick={() => {navigate("/Dashboard")}}>Dashboard</button>

    </form>
    

    </div>
  )
}

export default Login