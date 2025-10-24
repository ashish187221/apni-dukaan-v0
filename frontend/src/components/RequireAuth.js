// frontend/src/components/RequireAuth.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children }) {
  const token = localStorage.getItem("token");
  const location = useLocation();
  if (!token) {
    // redirect to login and save where user wanted to go
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
