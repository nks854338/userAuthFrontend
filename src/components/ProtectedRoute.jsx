import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const token = localStorage.getItem('authToken'); 

  return (
    <Route
      {...rest}
      element={token ? Component : <Navigate to="/login" replace />}
    />
  );
};

export default ProtectedRoute;
