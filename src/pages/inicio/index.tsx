import { HiUser } from "react-icons/hi2"
import { MdEmail } from "react-icons/md"
import { NavLink, useLocation } from "react-router"
import { Logo } from "../../components/Logo"
import { pageContent } from "../../utils/dataLogin"

export function Inicio() {

  const path: string = useLocation().pathname;

  return (
    <div className="w-full flex flex-col lg:flex-row gap-2 items-center justify-evenly">
      <section className="relative w-40 h-[225px] lg:w-[450px] lg:h-auto">
        <img
          src={pageContent[path].image}
          alt="imagem de login"
          className="w-full rounded-lg"
        />

        <section className="hidden lg:flex absolute -bottom-15 left-30">
          <Logo />
        </section>
      </section>

      <section className="w-full lg:w-lg flex flex-col gap-10 mt-8">
        <div>
          <h2 className="text-3xl lg:text-4xl font-semibold">Boas Vindas!</h2>
          <p className="text-sm lg:text-xl mt-2">
            {pageContent[path].description}
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <NavLink
            to="/login"
            className="w-full flex items-center justify-center gap-3 bg-[#252D4A] p-2 py-4 rounded-xl">
            <MdEmail className="text-[#B0E2FF] text-3xl" />
            <span className="text-sm lg:text-lg">{pageContent[path].actionPrimary}</span>
          </NavLink>

          <NavLink
            to={pageContent[path].actionSecondary === "Acessar como Visitante" ? "/home" : "#"}
            className="w-full flex items-center justify-center gap-3 bg-[#252D4A] p-2 py-4  rounded-xl">
            <HiUser className="text-[#B0E2FF] text-3xl" />
            <span className="text-sm lg:text-lg">{pageContent[path].actionSecondary}</span>
          </NavLink>
        </div>
      </section>

      <section className="w-full lg:hidden fixed bottom-5">
        <Logo />
      </section>
    </div>
  )
}