import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";

function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default RoutesMain;
