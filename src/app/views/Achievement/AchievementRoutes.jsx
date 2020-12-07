import React from "react";
import {authRoles} from "../../auth/authRoles"

const achievementRoutes = [
  {
    path: "/achievement/production",
    component: React.lazy(() => import("./Production")),
    auth: authRoles.admin 
  },
  {
    path: "/achievement/persistency",
    component: React.lazy(() => import("./Persistency")),
    auth: authRoles.admin 
  }
];

export default achievementRoutes;
