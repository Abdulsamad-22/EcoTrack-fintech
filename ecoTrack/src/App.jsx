import "./App.css";
import Budget from "./pages/Budget";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
