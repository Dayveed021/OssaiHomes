import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthRedirect = ({ adminRoute, userRoute, children }) => {
  const user = useSelector((state) => state.auth.user);
  const agent = user?.account?.role === "agent";
  const admin = user?.account?.role === "admin"; // Safely access nested properties

  if (adminRoute && agent) {
    toast.info("You are not logged in as an admin");
    return <Navigate to="/dashboard" />;
  } else if (userRoute && admin) {
    toast.info("You are not logged in as a user");
    return <Navigate to="/admin/profile" />;
  } else if (!user) {
    toast.info("You are not logged in");
    return <Navigate to="/login" />;
  }

  return children;
};
//   } else if (adminRoute && !admin) {
//     toast.info("You are not an admin");
//     return <Navigate to="/dashboard" />;
//   }
