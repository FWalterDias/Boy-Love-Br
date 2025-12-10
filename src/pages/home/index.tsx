import { Outlet } from "react-router"
import { Logo } from "../../components/Logo"
import { NavBar } from "../../components/NavBar"


export function Home() {
    return (
        <div className="w-full flex flex-col gap-2 items-center justify-evenly">
            <div className="w-full">
                <Logo />
            </div>

            <section className="w-lg mt-8">
                <NavBar />
            </section>

            <Outlet />
        </div>
    )
}