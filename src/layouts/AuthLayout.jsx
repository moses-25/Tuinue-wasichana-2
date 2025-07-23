import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AuthLayout = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AuthLayout;

