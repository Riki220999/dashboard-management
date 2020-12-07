import React from "react";
import {authRoles} from "../../auth/authRoles"

const profileRoutes = [
  {
    path: "/profile/list",
    component: React.lazy(() => import("./Profile")),
    auth: authRoles.admin 
  },
  {
    path: "/profile/detail",
    component: React.lazy(() => import("./ProfileDetail")),
    auth: authRoles.admin
  }
];

export default profileRoutes;
