import { useAuth } from "@/contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    // You can add a loading spinner here if you want
    return null;
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
