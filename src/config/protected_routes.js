import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import * as Sentry from "@sentry/react";

const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("jwt_token");
  const currentPath = window.location.pathname;

  if (!children) {
    Sentry.captureMessage("Children prop is required for ProtectedRoute", {
      level: "error",
      tags: {
        route: currentPath,
      },
    });
  }

  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;
