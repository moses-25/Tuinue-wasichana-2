import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../constants/routes";

// Layouts
import MainLayout from "../layouts/MainLayout/MainLayout";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";

// Pages
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound/NotFound";

// Auth
import Login from "../features/auth/Login/Login";
import Register from "../features/auth/Register/Register";

// Charities
import CharityList from "../features/charities/CharityList/CharityList";
import CharityDetails from "../features/charities/CharityDetails/CharityDetails";
import CharityApply from "../features/charities/CharityApply/CharityApply";

// Donations
import DonationForm from "../features/donations/DonationForm/DonationForm";
import DonationHistory from "../features/donations/DonationHistory/DonationHistory";

// Stories
import StoriesList from "../features/stories/StoriesList/StoriesList";
import StoryDetails from "../features/stories/StoryDetails/StoryDetails";

// Admin
import AdminDashboard from "../features/admin/AdminDashboard/AdminDashboard";
import CharityApproval from "../features/admin/CharityApproval/CharityApproval";

const AppRoutes = () => (
  <Routes>
    {/* Public routes */}
    <Route
      path={ROUTES.HOME}
      element={
        <MainLayout>
          <Home />
        </MainLayout>
      }
    />
    <Route
      path={ROUTES.ABOUT}
      element={
        <MainLayout>
          <About />
        </MainLayout>
      }
    />
    <Route
      path={ROUTES.LOGIN}
      element={
        <AuthLayout>
          <Login />
        </AuthLayout>
      }
    />
    <Route
      path={ROUTES.REGISTER}
      element={
        <AuthLayout>
          <Register />
        </AuthLayout>
      }
    />

    {/* Dashboard */}
    <Route
      path={ROUTES.DASHBOARD}
      element={
        <MainLayout>
          <Dashboard />
        </MainLayout>
      }
    />

    {/* Charities */}
    <Route
      path={ROUTES.CHARITIES}
      element={
        <MainLayout>
          <CharityList />
        </MainLayout>
      }
    />
    <Route
      path={ROUTES.CHARITY_DETAILS}
      element={
        <MainLayout>
          <CharityDetails />
        </MainLayout>
      }
    />
    <Route
      path={ROUTES.CHARITY_APPLY}
      element={
        <MainLayout>
          <CharityApply />
        </MainLayout>
      }
    />

    {/* Donations */}
    <Route
      path={ROUTES.DONATE}
      element={
        <MainLayout>
          <DonationForm />
        </MainLayout>
      }
    />
    <Route
      path={ROUTES.DONATIONS}
      element={
        <MainLayout>
          <DonationHistory />
        </MainLayout>
      }
    />

    {/* Stories */}
    <Route
      path={ROUTES.STORIES}
      element={
        <MainLayout>
          <StoriesList />
        </MainLayout>
      }
    />
    <Route
      path={ROUTES.STORY_DETAILS}
      element={
        <MainLayout>
          <StoryDetails />
        </MainLayout>
      }
    />

    {/* Admin */}
    <Route
      path={ROUTES.ADMIN_DASHBOARD}
      element={
        <MainLayout>
          <AdminDashboard />
        </MainLayout>
      }
    />
    <Route
      path={ROUTES.ADMIN_CHARITY_APPROVAL}
      element={
        <MainLayout>
          <CharityApproval />
        </MainLayout>
      }
    />

    {/* 404 */}
    <Route
      path={ROUTES.NOT_FOUND}
      element={
        <MainLayout>
          <NotFound />
        </MainLayout>
      }
    />
  </Routes>
);

export default AppRoutes;