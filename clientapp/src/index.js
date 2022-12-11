import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootContextStore from "./infrastructure/stores/rootContextStore";
import { RootStoreContext } from "./infrastructure/hooks/useRootStoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RootStoreContext.Provider value={rootContextStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RootStoreContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
