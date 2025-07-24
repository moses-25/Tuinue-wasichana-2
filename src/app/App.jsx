import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { AuthProvider } from '../context/AuthContext.jsx';
import '../App.css'; // Optional: you can define global layout styles here

const App = () => {
  return (
    <Router>
      <div className="tuinue-app">
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </div>
    </Router>
  );
};

export default App;
