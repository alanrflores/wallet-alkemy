import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "../../pages/LandingPage";
import DashboardPage from "../../pages/DashboardPage";
import LoginPage from "../../pages/LoginPage";
import MovementPage from "../../pages/MovementPage";
import MovementsPage from "../../pages/MovementsPage";
import AdminPage from "../../pages/AdminPage";
import ExpensePage from "../../pages/ExpensePage";
import TransferPage from "../../pages/TransferPage";
import AboutPage from "../../pages/AboutPage";
import UserPage from "../../pages/UserPage";
import BackOffice from '../../pages/BackofficePage';

const AnimateRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" index element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/admin/dashboard" element={<AdminPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/movements" element={<MovementsPage />} />
      <Route path="/movements/:id" element={<MovementPage />} />
      <Route path="/expense" element={<ExpensePage />} />
      <Route path="/transfer" element={<TransferPage />} />
      <Route path="/backoffice" element={<BackOffice />} />
      <Route path="*" element={<LandingPage fireSwal={true} />} /> {/* if no route matchs, redirects to landing */}

    </Routes>
  );
};

export default AnimateRoutes;
