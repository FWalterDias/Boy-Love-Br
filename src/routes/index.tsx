import { Route, Routes } from "react-router"
import { Home } from "../pages/home"
import { LoginOrSignUp } from "../pages/LoginOrSignUp"


export function MainRoutes() {

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LoginOrSignUp />} />
            <Route path="/signUp" element={<LoginOrSignUp />} />
        </Routes>
    )
}