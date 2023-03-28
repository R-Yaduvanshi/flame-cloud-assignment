import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProxyLocationPage from "./ProxyLocationPage";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/proxy" element={<ProxyLocationPage />} />
    </Routes>
  );
};

export default AllRoutes;
