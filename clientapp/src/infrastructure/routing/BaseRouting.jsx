import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Dashboard from "../../pages/Dashboard/Dashboard";
import BasicRouting from "./BasicRouting";
import ProtectedRouting from "./ProtectedRouting";
import NotFound from "../../pages/NotFound/NotFound";
import About from "../../pages/About/About";
import Profile from "../../pages/Profile/Profile";

export default function BaseRouting() {
  return (
    <Routes>
      <Route element={<ProtectedRouting />}>
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<About />} path="/about" />
        <Route element={<Profile />} path="/profile" />
        <Route element={<Dashboard />} path="/" />
      </Route>
      <Route element={<BasicRouting />}>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
