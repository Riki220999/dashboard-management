import React from "react";

const profileRoutes = [
  {
    path: "/profile/list",
    component: React.lazy(() => import("./Profile"))
  },
  {
    path: "/profile/detail",
    component: React.lazy(() => import("./ProfileDetail"))
  }
];

export default profileRoutes;
