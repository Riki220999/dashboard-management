import React from "react";
import {authRoles} from "../../auth/authRoles"

const agencyRoutes = [
  {
    path: "/updates/list",
    component: React.lazy(() => import("./AgencyUpdate")),
    auth: authRoles.admin 
  },
//   {
//     path: "/updates/detail",
//     component: React.lazy(() => import("./ProfileDetail"))
//   }
];

export default agencyRoutes;
