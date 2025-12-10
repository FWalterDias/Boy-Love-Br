import { HiUser } from "react-icons/hi2"
import { MdEmail } from "react-icons/md"
import { PiLockKeyBold } from "react-icons/pi"
import { NavLink, useLocation } from "react-router"
import { Logo } from "../../components/Logo"
import { pageContent } from "../../database/dataLogin"

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

                <section className="hidden lg:flex absolute -bottom-15 left-30">
                    <Logo />
                </section>
            </section>

            <section className="w-full lg:w-lg">
                <section className="w-full flex flex-col gap-10 mt-8">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold">Boas Vindas!</h2>
                        <p className="text-sm lg:text-xl mt-2">
                            {pageContent[path].description}
                        </p>
                    </div>

                    <div className="w-full lg:w-xs flex flex-col gap-5">
                        <div className="w-full flex items-center justify-center gap-3 bg-[#252D4A] p-3 rounded-xl">
                            <HiUser className="text-[#B0E2FF] text-3xl" />
                            <input
                                type="text"
                                placeholder={pageContent[path].actionPrimary}
                                className="focus:outline-none bg-transparent text-white placeholder-gray-300 text-sm lg:text-lg py-2" />
                        </div>

                        {
                            path == "/signUp" ?
                                <div className="w-full flex items-center justify-center gap-3 bg-[#252D4A] p-2 rounded-xl">
                                    <MdEmail className="text-[#B0E2FF] text-3xl" />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="focus:outline-none bg-transparent text-white placeholder-gray-300 text-sm lg:text-lg py-2" />
                                </div> : null
                        }

                        <div className="w-full flex items-center justify-center gap-5 bg-[#252D4A] p-3 rounded-xl">
                            <PiLockKeyBold className="text-[#B0E2FF] text-3xl" />
                            <input
                                type="password"
                                placeholder={pageContent[path].actionSecondary}
                                className="focus:outline-none bg-transparent text-white placeholder-gray-300 text-sm lg:text-lg py-2" />
                        </div>
                    </div>
                </section>

                <div className="w-full lg:w-xs flex flex-col items-center justify-center gap-5 mt-10">
                    <button className="w-3/4 p-2 bg-[#252D4A] rounded-xl text-sm lg:text-base">
                        {path == "/login" ? "Entrar" : "Criar conta"}
                    </button>

                    {
                        path == '/signUp' ?
                            <NavLink to='/login' className="text-sm lg:text-base">Fazer Login</NavLink> : null
                    }
                </div>

                {
                    path !== "/signUp" ?
                        <div className="w-full lg:w-xs text-center mt-5">
                            <NavLink to="/signUp" className="text-sm lg:text-base">Criar conta</NavLink>
                        </div> : null
                }
            </section>

            <section className="w-full lg:hidden fixed bottom-5">
                <Logo />
            </section>
        </div>
    )
}