import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Patients = React.lazy(() => import("patients/App"));
const Auth = React.lazy(() => import("authe/App"));
// const Auth = React.lazy(() => import("auth/App"));
import './index.css'
export default function App() {
  return (
    <BrowserRouter>
      <h1 className="bg-red-200">Shellee</h1>

      <nav className="bg-red-300">
        {/* <Link to="/auth">Auth</Link> | */}
        <Link className=" mr-10" to="/patients">Patients</Link>    
            <Link to="/auth">auth</Link>/
      </nav>

      <React.Suspense fallback="Loading...">
        <Routes>
          {/* <Route path="/auth/*" element={<Auth />} /> */}
       <Route path="/patients/*" element={<Patients />} />
       <Route path="/auth/*" element={<Auth />} />
          <Route path="*" element={<h3>Shell 404</h3>} />
        </Routes>
        
      </React.Suspense>
    </BrowserRouter>
  );
}
