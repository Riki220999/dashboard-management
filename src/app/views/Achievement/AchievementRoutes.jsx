import React from "react";

const achievementRoutes = [
  {
    path: "/achievement/production",
    component: React.lazy(() => import("./Production"))
  },
  {
    path: "/achievement/persistency",
    component: React.lazy(() => import("./Persistency"))
  }
];

export default achievementRoutes;
