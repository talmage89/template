import * as React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { Home } from "../features/core/home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
];

export const AppRoutes = () => {
  const element = useRoutes(routes);
  return <>{element}</>;
};
