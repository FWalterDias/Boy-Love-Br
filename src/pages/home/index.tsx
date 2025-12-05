import { GiLovers } from "react-icons/gi"
import { HiUser } from "react-icons/hi2"
import { MdEmail } from "react-icons/md"
import { useLocation } from "react-router"
import { pageContent } from "../../utils/dataLogin"
import { NavLink } from "react-router"

export function Home() {

  const path: string = useLocation().pathname;

  return (
    <div className="w-full flex flex-col gap-2 items-center">
      <section className="w-[160px] h-[225px]">
        <img
          src={pageContent[path].image}
          alt="imagem de login"
          className="w-full rounded-lg"
        />
      </section>

      <section className="w-full flex flex-col gap-10 mt-8">
        <div>
          <h2 className="text-5xl font-semibold">Boas Vindas!</h2>
          <p className="text-2xl mt-2">
            {pageContent[path].description}
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <NavLink to="/login" className="w-full flex items-center justify-center gap-5 bg-[#252D4A] p-4 rounded-xl">
            <MdEmail className="text-[#B0E2FF] text-3xl" />
            <span className="text-2xl">{pageContent[path].actionPrimary}</span>
          </NavLink>

          <NavLink to="#" className="w-full flex items-center justify-center gap-5 bg-[#252D4A] p-4 rounded-xl">
            <HiUser className="text-[#B0E2FF] text-3xl" />
            <span className="text-2xl">{pageContent[path].actionSecondary}</span>
          </NavLink>
        </div>
      </section>

      <section className="w-full flex gap-2 justify-center items-center fixed bottom-5">
        <GiLovers className="text-[#B0E2FF] text-3xl" />
        <span className="bg-gradient-to-r from-[#7FD1CC] to-[#9694F5] bg-clip-text text-transparent">Boy Love Br</span>
      </section>
    </div>
  )
}