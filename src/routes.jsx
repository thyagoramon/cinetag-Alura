import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/pages/home";
import Favoritos from "@/pages/favoritos";
import Player from "@/pages/player";
import NaoEncontrada from "@/pages/naoEncontrada";
import Base from "./pages/base";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Home />}></Route>
          <Route path="favoritos" element={<Favoritos />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NaoEncontrada />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
