import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from '../layouts/MainLayout.jsx';
import AuthLayout from '../layouts/AuthLayout.jsx';

// Pages
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Programs from '../pages/Programs.jsx';
import Stories from '../pages/Stories.jsx';
import StoryDetails from '../features/stories/StoryDetails.jsx';
import Charities from '../pages/Charities.jsx';
import CharityDetails from '../pages/CharityDetails.jsx';
import Donate from '../pages/Donate.jsx';
import FAQ from '../pages/FAQ.jsx';
import Contact from '../pages/Contact.jsx';
import NotFound from '../pages/NotFound.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import Login from '../features/auth/Login.jsx';
import Register from '../features/auth/Register.jsx';

const AppRoutes = () => {
  return (
      <Routes>
        {/* Public-facing layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:id" element={<StoryDetails />} />
          <Route path="/charities" element={<Charities />} />
          <Route path="/charities/:id" element={<CharityDetails />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Dashboard - protected routes layout */}
        <Route element={<AuthLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default AppRoutes;

