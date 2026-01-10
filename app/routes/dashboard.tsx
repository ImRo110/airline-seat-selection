import { Dashboard } from "~/pages/Dashboard/Dashboard";
import { AuthProvider } from "~/utils/context/AuthContext";

const dashboard = () => {
  return (
    <AuthProvider>
      <Dashboard />
    </AuthProvider>
  );
};

export default dashboard;
