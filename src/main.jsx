import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./Components/Login";
import CreateAccount from "./Components/CreateAccount";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/create-account" element={<CreateAccount/>} />

        {/* Login page route */}
        <Route path="/login" element={<Login />} />

        {/* redirect  to signup */}
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);