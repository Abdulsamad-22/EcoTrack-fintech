import "./App.css";
import Budget from "./pages/Budget";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tracking from "./pages/Tracking";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { useAuth } from "./Auth/AuthProvider";
import { useState } from "react";
import RouteWrapper from "./RouteWrapper";
import useAutoLogout from "./Auth/useAutoLogout";

function App() {
  const [heading, setHeading] = useState("");
  const [buttonLabels, setButtonLabels] = useState("");
  const [message, setMessage] = useState("");
  const { currentUser, loading } = useAuth();

  useAutoLogout();
  if (loading) return <div>Loading...</div>;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/signUp"
          element={
            !currentUser ? (
              <SignUp
                heading={"Create an account"}
                buttonLabels={"Login"}
                message={"Welcome Back"}
              />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />

        <Route
          path="/login"
          element={
            !currentUser ? (
              <Login
                heading={"Login"}
                buttonLabels={"Sign up"}
                message={"Welcome to EcoTrack"}
              />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />

        <Route
          path="/dashboard"
          element={
            <RouteWrapper>
              <Dashboard />
            </RouteWrapper>
          }
        ></Route>

        <Route
          path="/budget"
          element={
            <RouteWrapper>
              <Budget />
            </RouteWrapper>
          }
        />

        <Route
          path="/tracking"
          element={
            <RouteWrapper>
              <Tracking />
            </RouteWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
