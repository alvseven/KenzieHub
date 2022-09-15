import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import Register from "../pages/register";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default RoutesMain;
