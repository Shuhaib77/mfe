import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const mount = (el) => {
  const root = createRoot(el);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

// ------------- Standalone Mode -------------
if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("patients-root");
  if (el) mount(el);
}

export { mount };
