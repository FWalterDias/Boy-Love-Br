import { Route, Routes } from "react-router"
import { Inicio } from "../pages/inicio"
import { Signinorsignup } from "../pages/signinorsignup"
import { Home } from "../pages/home"

export function MainRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/login" element={<Signinorsignup />} />
            <Route path="/signUp" element={<Signinorsignup />} />

            <Route path="/home" element={<Home />} />
        </Routes>
    )
}