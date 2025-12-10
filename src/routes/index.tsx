import { Route, Routes } from "react-router"
import { Home } from "../pages/home"
import { Inicio } from "../pages/inicio"
import { Signinorsignup } from "../pages/signinorsignup"

import { SectionDiscover } from "../components/SectionDiscover"
import { SectionHome } from "../components/SectionHome"

export function MainRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/login" element={<Signinorsignup />} />
            <Route path="/signUp" element={<Signinorsignup />} />

            <Route path="/home" element={<Home />}>
                <Route path="" element={<SectionHome />} />
                <Route path=":discover" element={<SectionDiscover />} />
            </Route>
        </Routes>
    )
}