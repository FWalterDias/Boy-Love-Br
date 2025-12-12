import { Outlet } from "react-router"
import { Logo } from "../../components/Logo"
import { NavBarMobile } from "../../components/NavBarMobile"
import { NavBarDesktop } from "../../components/NavBarDesktop"
import { AsideDesktop } from "../../components/AsideDesktop"
import { usePath } from "../../hooks/usePath"
import { titleRoutes } from "../../database/dataTitleRoutes"

export function Home() {

    const { path } = usePath();
    const basePath = path.split("/");

    // Encontrar onde começa o primeiro número
    const indexNumber = basePath.findIndex(item => !isNaN(Number(item)));

    // Se tiver número, corta tudo a partir dele
    const finalArray = indexNumber !== -1
        ? basePath.slice(0, indexNumber)
        : basePath;

    // Monta a rota final
    const finalPath = "/" + finalArray.join("/");

    console.log(finalPath);

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
                <div className="hidden lg:flex items-end gap-3 mt-10">
                    <img
                        src={titleRoutes[basePath].icon}
                        alt="img-route"
                        className="w-[40px]"
                    />
                    <p className="text-lg font-bold">
                        {titleRoutes[basePath].name}
                    </p>
                </div>
                <Outlet />
            </section>

            <AsideDesktop />
        </div>
    )
}