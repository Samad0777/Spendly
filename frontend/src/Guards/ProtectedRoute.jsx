import { useAuth } from "../hook/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, authChecking } = useAuth();

  if (authChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-text-secondary">Checking authentication...</p>
      </div>
    </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
