import { createContext, useContext } from "react";
import rootContextStore from "../stores/rootContextStore";

export const RootStoreContext = createContext(rootContextStore);

export function useRootStore() {
  return useContext(RootStoreContext);
}
