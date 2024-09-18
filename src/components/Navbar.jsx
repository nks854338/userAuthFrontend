import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false); // Update the logged-in state
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
                <NavLink to="/signin" className="nav-link">
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
