import { Route, Routes } from "react-router-dom";
import ClientsPage from "./features/clients/pages/ClientsPage";

const AppRoutes = () => {
  return (
    <main className="pt-16 p-6">
      <Routes>
        <Route path="/clients" element={<ClientsPage />} />
      </Routes>
    </main>
  );
};

export default AppRoutes;
