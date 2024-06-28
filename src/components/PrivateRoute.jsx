import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>; // Puedes personalizar el indicador de carga
  
  return user ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
