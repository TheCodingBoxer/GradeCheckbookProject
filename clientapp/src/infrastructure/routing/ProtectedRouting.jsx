import React from "react";
import Header from "../../components/Header/Header";
import { Navigate, Outlet } from "react-router-dom";
import { useRootStore } from "../hooks/useRootStoreContext";

export default function ProtectedRouting() {
  const { tokenStore } = useRootStore();

  return tokenStore.isLoggedIn ? (
    <div id="main-page">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to="/login" />
  );
}
