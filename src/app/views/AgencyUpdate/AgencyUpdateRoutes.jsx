import React from "react";

const agencyRoutes = [
  {
    path: "/updates/list",
    component: React.lazy(() => import("./AgencyUpdate"))
  },
//   {
//     path: "/updates/detail",
//     component: React.lazy(() => import("./ProfileDetail"))
//   }
];

export default agencyRoutes;
