import { Outlet } from "react-router"
import { Logo } from "../../components/Logo"
import { NavBarMobile } from "../../components/NavBarMobile"
import { NavBarDesktop } from "../../components/NavBarDesktop"
import { AsideDesktop } from "../../components/AsideDesktop"
import { usePath } from "../../hooks/usePath"
import categoryColored from "../../assets/category_colored.png"
import discoverColored from "../../assets/discover_colored.png"
import homeColored from "../../assets/home_colored.png"

export function Home() {

     const { path } = usePath();
        console.log(path)
    return (
        <div className="w-full grid lg:grid-cols-6 gap-5">
            <section className="hidden w-full lg:flex absolute top-5">
                <Logo />
            </section>

            <section className="lg:hidden w-xs mt-5">
                <NavBarMobile />
            </section>

            <section className="hidden lg:block lg:col-span-1 w-full h-full min-h-screen">
                <NavBarDesktop />
            </section>

            <section className="w-full lg:col-span-4 lg:pt-20">
                <div className="flex gap-3"> 
                    
                </div>
                <Outlet />
            </section>

            <AsideDesktop />
        </div>
    )
}