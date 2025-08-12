import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/pages/home";
import Favoritos from "./pages/favoritos";
import Header from "./components/Header";
import Footer from "./components/Footer";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favoritos" element={<Favoritos />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
