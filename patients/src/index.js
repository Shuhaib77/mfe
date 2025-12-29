import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const mount = (el, { standalone = false } = {}) => {
  const root = createRoot(el);
  if (standalone) {
    root.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  } else {
    root.render(<App />);
  }
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("patients-root");
  if (el) mount(el, { standalone: true });
}

export { mount };
