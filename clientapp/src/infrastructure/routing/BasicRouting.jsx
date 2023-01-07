import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useRootStore } from "../hooks/useRootStoreContext";

export default function ProtectedRouting() {
  const { currentUserStore } = useRootStore();
  if (currentUserStore.userName) return <Navigate to="/" replace />;

  return (
    <div className="full-page">
      <Outlet />
    </div>
  );
}
