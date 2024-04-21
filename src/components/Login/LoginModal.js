// components/LoginModal.js

import React, { useState } from 'react';
import axios from 'axios'; // For making HTTP requests

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a request to the backend server to authenticate the user
      const response = await axios.post('/api/login', { email, password });

      // If login is successful, you can do something with the response, such as redirecting the user or updating state
      console.log('Login successful:', response.data);
      onClose(); // Close the modal after successful login
    } catch (error) {
      // If login fails, handle the error
      console.error('Login failed:', error.response.data);
      setError(error.response.data.message); // Assuming your backend returns an error message
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a request to the backend server to register the user
      const response = await axios.post('/api/register', { email, password });

      // If registration is successful, you can do something with the response, such as redirecting the user or updating state
      console.log('Registration successful:', response.data);
      onClose(); // Close the modal after successful registration
    } catch (error) {
      // If registration fails, handle the error
      console.error('Registration failed:', error.response.data);
      setError(error.response.data.message); // Assuming your backend returns an error message
    }
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          {error && <p className="error">{error}</p>}
        </form>
        <hr />
        {/* <form onSubmit={handleRegisterSubmit}>
          <h2>Register</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>
          {error && <p className="error">{error}</p>}
        </form> */}
      </div>
    </div>
  );
};

export default LoginModal;
