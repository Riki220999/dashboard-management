import React from "react";

const policyRoutes = [
  {
    path: "/policy/list",
    component: React.lazy(() => import("./Policy"))
  }
];

export default policyRoutes;
