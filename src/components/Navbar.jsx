import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token); 
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    navigate('/login'); 
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <NavLink to="/home" className="nav-link">
            Home
          </NavLink>
        </div>
        <div className="auth">
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <button>
                <NavLink to="/" className="nav-link">
                  Sign Up
                </NavLink>
              </button>
              <button>
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

