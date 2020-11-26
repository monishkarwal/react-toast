import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ToastProvider } from "./components/Toast/context/ToastContext";

ReactDOM.render(
  <ToastProvider>
    <App />
  </ToastProvider>,
  document.getElementById("root")
);
