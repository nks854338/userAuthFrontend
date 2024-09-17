import React from 'react';
import { Navigate } from 'react-router-dom';

const HomePage = () => {
  const isAuthenticated = !!localStorage.getItem('authToken'); 

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
        <div style={{height:'80vh', alignItems: 'center', justifyContent: 'center', width: 'fit-content', margin: 'auto', marginTop: '30px;'}}>
          <img src="woman_laptop.png" alt="" style={{height:'100%', width:'100%'}} />
        </div>
    </>
  );
};

export default HomePage;
