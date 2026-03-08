import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/dashboard/Dashboard";
import Stakeholders from "../pages/stakeholders/Stakeholders";
import StakeholderGroups from "../pages/stakeholder-groups/StakeholderGroups";
import Interactions from "../pages/interactions/Interactions";
import Issues from "../pages/issues/Issues";

const Router = () => {
  return (
    <BrowserRouter>

      <MainLayout>

        <Routes>

          <Route path="/" element={<Dashboard />} />

          <Route path="/stakeholders" element={<Stakeholders />} />

          <Route path="/groups" element={<StakeholderGroups />} />

          <Route path="/interactions" element={<Interactions />} />

          <Route path="/issues" element={<Issues />} />

        </Routes>

      </MainLayout>

    </BrowserRouter>
  );
};

export default Router;