import { HiUser } from "react-icons/hi2"
import { MdEmail } from "react-icons/md"
import { PiLockKeyBold } from "react-icons/pi"
import { NavLink, useLocation } from "react-router"
import { Logo } from "../../components/Logo"
import { pageContent } from "../../utils/dataLogin"

export function Signinorsignup() {

    const path: string = useLocation().pathname;

    return (
        <div className="w-full flex flex-col lg:flex-row gap-2 items-center justify-evenly">
            <section className="relative w-40 h-[225px] lg:w-[450px] lg:h-auto">
                <img
                    src={pageContent[path].image}
                    alt="imagem de login"
                    className="w-full rounded-lg"
                />

                <section className="hidden lg:flex absolute -bottom-15 left-65">
                    <Logo />
                </section>
            </section>

            <section className="w-full lg:w-lg">
                <section className="w-full flex flex-col gap-10 mt-8">
                    <div>
                        <h2 className="text-5xl lg:text-7xl font-semibold">Boas Vindas!</h2>
                        <p className="text-xl lg:text-2xl mt-2">
                            {pageContent[path].description}
                        </p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="w-full flex items-center justify-center gap-5 bg-[#252D4A] p-4 rounded-xl">
                            <HiUser className="text-[#B0E2FF] text-3xl" />
                            <input
                                type="text"
                                placeholder={pageContent[path].actionPrimary}
                                className="focus:outline-none bg-transparent text-white placeholder-gray-300" />
                        </div>

                        {
                            path == "/signUp" ?
                                <div className="w-full flex items-center justify-center gap-5 bg-[#252D4A] p-4 rounded-xl">
                                    <MdEmail className="text-[#B0E2FF] text-3xl" />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="focus:outline-none bg-transparent text-white placeholder-gray-300" />
                                </div> : null
                        }

                        <div className="w-full flex items-center justify-center gap-5 bg-[#252D4A] p-4 rounded-xl">
                            <PiLockKeyBold className="text-[#B0E2FF] text-3xl" />
                            <input
                                type="password"
                                placeholder={pageContent[path].actionSecondary}
                                className="focus:outline-none bg-transparent text-white placeholder-gray-300" />
                        </div>
                    </div>
                </section>

                <div className="w-full flex flex-col items-center justify-center gap-5 mt-10">
                    <button className="w-3/4 p-2 bg-[#252D4A] rounded-xl text-xl lg:text-2xl">
                        {path == "/login" ? "Entrar" : "Criar conta"}
                    </button>

                    {
                        path == '/signUp' ?
                            <NavLink to='/login' className="text-xl lg:text-2xl">Fazer Login</NavLink> : null
                    }
                </div>

                {
                    path !== "/signUp" ?
                        <div className="w-full text-center mt-5">
                            <NavLink to="/signUp" className="text-xl lg:text-2xl">Criar conta</NavLink>
                        </div> : null
                }
            </section>

            <section className="w-full lg:hidden fixed bottom-5">
                <Logo />
            </section>
        </div>
    )
}