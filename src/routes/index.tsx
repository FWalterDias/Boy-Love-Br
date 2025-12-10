import { Route, Routes } from "react-router"


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