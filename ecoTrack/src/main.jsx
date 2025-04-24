import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import BudgetProvider from "./components/budget/BudgetProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BudgetProvider>
      <App />
    </BudgetProvider>
  </React.StrictMode>
);
