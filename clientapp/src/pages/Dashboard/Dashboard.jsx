import React from "react";
import { useRootStore } from "../../infrastructure/hooks/useRootStoreContext";

export default function Dashboard() {
  const { currentUserStore } = useRootStore();

  return (
    <div>
      <h2>Dashboard</h2>
      <h4>Welcome {currentUserStore.displayName}</h4>
    </div>
  );
}
