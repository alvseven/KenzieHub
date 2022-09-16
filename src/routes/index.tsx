import { Routes, Route } from "react-router-dom";
import UserProvider from "../contexts/UserContext";

import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import Register from "../pages/register";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <UserProvider>
            <Dashboard />
          </UserProvider>
        }
      />
    </Routes>
  );
}

export default RoutesMain;
