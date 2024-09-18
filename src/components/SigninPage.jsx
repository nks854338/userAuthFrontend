import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SigninPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.name || !formData.email || !formData.password) {
      console.error("All fields are required.");
      return;
    }
  
    try {
      await axios.post('https://user-auth-backend-beta.vercel.app', formData);
      navigate('/login');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div className="data heading">Sign up</div>
        <div className="data">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="data">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="data">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="btn">
        <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SigninPage;
