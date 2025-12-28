import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";

export default function App() {
  return (
    <>
      <h2>Patients MFE</h2>

      <nav>
        <Link to="">List</Link> |
        <Link to="view/3">View Patient 3</Link> |
        <Link to="login">Login</Link>
      </nav>

      <Routes>
        <Route index element={<h3>Patients List</h3>} />
        <Route path="view/:id" element={<h3>Patient Details Page</h3>} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<h3>Patients 404</h3>} />
      </Routes>
    </>
  );
}
