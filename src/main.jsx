import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./Panel/AdminLogin.jsx";
import AdminPanel from "./Panel/AdminPanel.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/adminLogin" element={<AdminLogin />} />
      <Route path="/adminPanel" element={<AdminPanel />} />
    </Routes>
  </BrowserRouter>
);
