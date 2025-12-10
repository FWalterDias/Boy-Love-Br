import { Route, Routes } from "react-router"
import { Home } from "../pages/home"
import { Inicio } from "../pages/inicio"
import { Signinorsignup } from "../pages/signinorsignup"

import { SectionDiscover } from "../components/SectionDiscover"
import { SectionHome } from "../components/SectionHome"
import { Player } from "../components/Player"

export function MainRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/login" element={<Signinorsignup />} />
            <Route path="/signUp" element={<Signinorsignup />} />

            <Route path="/home" element={<Home />}>
                <Route index  element={<SectionHome />} />
                <Route path=":titleContent" element={<Player />} />

                <Route path="discover" element={<SectionDiscover />} />
            </Route>
        </Routes>
    )
}