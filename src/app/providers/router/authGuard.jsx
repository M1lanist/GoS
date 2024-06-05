import { Navigate, Outlet } from "react-router-dom";

import React from "react";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ roles }) => {
    const userRoles = useSelector((store) => store.auth.roleNames);
    console.log(roles?.includes(userRoles[0]));
  return roles?.includes(userRoles[0]) ? <Outlet /> : <Navigate to="/login" />;
};
