import React from "react";
import { Redirect } from "react-router-dom";

import dashboardRoutes from "./views/dashboard/DashboardRoutes";
import utilitiesRoutes from "./views/utilities/UtilitiesRoutes";
import sessionRoutes from "./views/sessions/SessionRoutes";

import materialRoutes from "./views/material-kit/MaterialRoutes";
import dragAndDropRoute from "./views/Drag&Drop/DragAndDropRoute";

import achievementRoutes from './views/Achievement/AchievementRoutes';
import policyRoutes from './views/Policy/PolicyRoutes';
import profileRoutes from './views/AgencyProfile/AgencyProfileRoutes';
import agencyRoutes from './views/AgencyUpdate/AgencyUpdateRoutes';

import formsRoutes from "./views/forms/FormsRoutes";
import mapRoutes from "./views/map/MapRoutes";

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/achievement/Production" />
  }
];

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />
  }
];

const routes = [
  ...sessionRoutes,
  ...dashboardRoutes,
  ...materialRoutes,
  ...utilitiesRoutes,
  ...dragAndDropRoute,
  ...formsRoutes,
  ...mapRoutes,
  ...redirectRoute,
  ...achievementRoutes,
  ...policyRoutes,
  ...profileRoutes,
  ...agencyRoutes,
  ...errorRoute
];

export default routes;
