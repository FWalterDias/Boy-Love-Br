import { Route, Routes } from "react-router"
import { Inicio } from "../pages/inicio/index.tsx"
import { Signinorsignup } from "../pages/signinorsignup/index.tsx"
import { Home } from "../pages/home/index.tsx"



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