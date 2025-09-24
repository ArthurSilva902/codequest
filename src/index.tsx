import { StrictMode } from "react";
import axios from "axios";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../tailwind.css";

const rootElement = document.getElementById("app");
if (!rootElement) {
  throw new Error("Root element not found");
}

// Bootstrap Axios
axios.defaults.baseURL = "/"; // usaremos caminhos /api via proxy
const savedToken = localStorage.getItem("token");
if (savedToken) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${savedToken}`;
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
