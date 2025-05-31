import { Navigate } from "react-router-dom";

import { useAuth } from "./Auth/AuthProvider";

export default function RouteWrapper({ children }) {
  const { currentUser, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return currentUser ? children : <Navigate to="/login" />;
}
