import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContextProvider } from "./context/ContextProvider.jsx";
import AppRoutes from "./routes.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <AppRoutes/>
    </ContextProvider>
  </StrictMode>
);
