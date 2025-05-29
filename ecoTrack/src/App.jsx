import "./App.css";
import Budget from "./pages/Budget";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tracking from "./pages/Tracking";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/budget" element={<Budget />} />

        <Route path="/tracking" element={<Tracking />} />

        <Route path="/logOut" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
