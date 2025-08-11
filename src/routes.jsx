import { BrowserRouter, Route, Routes } from "react-router"
import Home from "@/pages/home"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes