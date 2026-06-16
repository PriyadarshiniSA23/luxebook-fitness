import { Navigate, useLocation } from "react-router-dom";

function RequireAdmin({ children }) {
  const location = useLocation();
  const isAdmin = window.localStorage.getItem("isAdmin") === "true";

  if (!isAdmin) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAdmin;
