import React from 'react'
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./src/ProtectedRoute";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";
import Dashboard from "./src/pages/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}