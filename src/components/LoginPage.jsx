import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://user-auth-backend-beta.vercel.app/login', formData);
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        navigate('/home');
      } else {
        setErrorMessage("Login failed. Please try again."); 
      }
      console.log("Login response:", response.data); 
      console.log("login ho gaya");
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div className="data heading">Login</div>
        <div className="data">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="data">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="btn">
        <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
