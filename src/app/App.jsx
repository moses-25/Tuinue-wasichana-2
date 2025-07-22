import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { Provider } from 'react-redux';
import store from './store';
import { AuthProvider } from '../context/AuthContext';
import '../index.css'; // Global styles
import './App.css';    // App-level custom styles

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
};

export default App;
