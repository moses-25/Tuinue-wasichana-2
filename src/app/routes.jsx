import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
import NotFound from '../pages/NotFound/NotFound';

// Layout (optional)
import MainLayout from '../layouts/MainLayout/MainLayout';

function AppRoutes() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/charities" element={<Charities />} />
          <Route path="/charities/:id" element={<CharityDetails />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default AppRoutes;

