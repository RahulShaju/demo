import { Route, Routes } from "react-router-dom";
import Dashboard from "./features/clients/pages/Dashboard";

const AppRoutes = () => {
  return (
    <main className="pt-16 p-6">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </main>
  );
};

export default AppRoutes;
