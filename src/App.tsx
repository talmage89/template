import * as React from "react";
import { AppProvider } from "./providers";
import { AppLayout } from "./layouts";
import "./App.scss";

export const App = () => {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
};
