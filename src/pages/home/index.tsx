import { Outlet } from "react-router"
import { Logo } from "../../components/Logo"
import { NavBarMobile } from "../../components/NavBarMobile"
import { NavBarDesktop } from "../../components/NavBarDesktop"


export function Home() {
    return (
        <div className="w-full grid lg:grid-cols-6 gap-5 place-items-center">
            <Logo />

            <section className="lg:hidden w-xs mt-5">
                <NavBarMobile />
            </section>

            <section className="hidden lg:block lg:col-span-1 w-full h-full min-h-screen mt-5">
                <NavBarDesktop />
            </section>

            <section className="w-full lg:col-span-4">
                <Outlet />
            </section>

            <section className="hidden lg:block w-full lg:col-span-1">
                 mais assistidos
            </section>
        </div>
    )
}