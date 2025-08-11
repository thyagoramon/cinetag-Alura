import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/pages/home";
import { ContextProvider } from "@/context/ContextProvider.jsx";

function AppRoutes() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default AppRoutes;
