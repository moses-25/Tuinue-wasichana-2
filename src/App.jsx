import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './app/routes';
import './App.css'; // Optional: you can define global layout styles here

const App = () => {
  return (
    <Router>
      <div className="tuinue-app">
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
