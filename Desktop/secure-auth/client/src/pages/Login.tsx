import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { response } from 'express';

const LoginPage = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { email, password } = inputValue;
  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value
  })
  };

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/login",
        {
          ...inputValue,
        },
        { withCredentials: false }
      );
      if (data.success) {
        navigate('/protected');
      }  else {
        console.log('Login failed. Please try again.');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
