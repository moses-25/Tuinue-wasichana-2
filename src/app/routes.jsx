import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from '../constants/routes';
import MainLayout from '../layouts/MainLayout/MainLayout';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';

// Pages
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Programs from '../pages/Programs/Programs';
import Stories from '../pages/Stories/Stories';
import Charities from '../pages/Charities/Charities';
import CharityDetails from '../pages/CharityDetails/CharityDetails';
import Donate from '../pages/Donate/Donate';
import FAQ from '../pages/FAQ/FAQ';
import Contact from '../pages/Contact/Contact';
import Dashboard from '../pages/Dashboard/Dashboard';
import Login from '../features/auth/Login/Login';
import Register from '../features/auth/Register/Register';
import NotFound from '../pages/NotFound/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main layout routes */}
      <Route element={<MainLayout />}>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.ABOUT} element={<About />} />
        <Route path={routes.PROGRAMS} element={<Programs />} />
        <Route path={routes.STORIES} element={<Stories />} />
        <Route path={routes.CHARITIES} element={<Charities />} />
        <Route path={routes.CHARITY_DETAILS} element={<CharityDetails />} />
        <Route path={routes.DONATE} element={<Donate />} />
        <Route path={routes.FAQ} element={<FAQ />} />
        <Route path={routes.CONTACT} element={<Contact />} />
        <Route path={routes.DASHBOARD} element={<Dashboard />} />
      </Route>

      {/* Auth layout routes */}
      <Route element={<AuthLayout />}>
        <Route path={routes.LOGIN} element={<Login />} />
        <Route path={routes.REGISTER} element={<Register />} />
      </Route>

      {/* 404 */}
      <Route path={routes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
