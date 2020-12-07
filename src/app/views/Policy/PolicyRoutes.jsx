import React from "react";
import {authRoles} from "../../auth/authRoles"

const policyRoutes = [
  {
    path: "/policy/list",
    component: React.lazy(() => import("./Policy")),
    auth: authRoles.admin 
  }
];

export default policyRoutes;
