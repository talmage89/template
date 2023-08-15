import * as React from "react";
import { AppRoutes } from "../routes";
import "./AppLayout.scss";

export const AppLayout = () => {
  return (
    <div className="AppLayout flex-column">
      <AppRoutes />
    </div>
  );
};
