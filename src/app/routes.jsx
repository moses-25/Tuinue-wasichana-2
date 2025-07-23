import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout/MainLayout";

// Pages
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Charities from "../pages/Charities/Charities";
import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/charities" element={<Charities />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;

