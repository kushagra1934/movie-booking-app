import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // If no user is logged in, redirect them to the login page
    return <Navigate to="/login" />;
  }

  return children; // If a user is logged in, show the requested page
};

export default ProtectedRoute;
