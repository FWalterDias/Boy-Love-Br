import { Route, Routes } from "react-router"
import { Inicio } from "../pages/inicio"
import { SignInOrSignUp } from "../pages/signInOrSignup"
import { Home } from "../pages/home"


export function MainRoutes() {

    return(
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/login" element={<SignInOrSignUp />} />
            <Route path="/signUp" element={<SignInOrSignUp />} />

            <Route path="/home" element={<Home />} />
        </Routes>
    )
}