import React from 'react';
import './AuthLayout.css';

const AuthLayout = ({ children }) => {
  return (
    <div className="tw-auth-layout">
      <div className="auth-box">
        <h1 className="auth-title">Welcome to Tuinue Wasichana</h1>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
