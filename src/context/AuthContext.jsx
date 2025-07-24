import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Create context
const AuthContext = createContext();

// 2. AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Try to load user from localStorage
    const storedUser = localStorage.getItem('tuinueUser');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem('tuinueToken') || null);
  const login = (userData, tokenData) => {
    setUser(userData);
    setToken(tokenData);
    localStorage.setItem('tuinueUser', JSON.stringify(userData));
    localStorage.setItem('tuinueToken', tokenData);
  };
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('tuinueUser');
    localStorage.removeItem('tuinueToken');
  };
  const isAuthenticated = !!token;
  useEffect(() => {
    // Optional: check auth status on mount or refresh
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Custom hook to use auth context
export const useAuthContext = () => {
  return useContext(AuthContext);
};

