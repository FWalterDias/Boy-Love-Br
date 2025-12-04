import { Route, Routes } from "react-router";
import { SignIn } from "../pages/SignIn";


export function MainRoutes() {
    return(
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signIn" element={<SignIn />} />
        </Routes>
    )
}