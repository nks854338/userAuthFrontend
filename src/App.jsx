import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SigninPage from './components/SigninPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar'; // Import the Navbar

function App() {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Check if user is authenticated

  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route
          path="/home"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
