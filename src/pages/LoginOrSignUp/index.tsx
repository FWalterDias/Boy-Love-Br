import { NavLink, useLocation } from "react-router";
import { pageContent } from "../../utils/dataLogin";
import { MdEmail } from "react-icons/md";
import { HiUser } from "react-icons/hi2";
import { GiLovers } from "react-icons/gi";
import { PiLockKeyBold } from "react-icons/pi"

export function LoginOrSignUp() {

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
                    <div className="w-full flex items-center justify-center gap-5 bg-[#252D4A] p-4 rounded-xl">
                        <HiUser className="text-[#B0E2FF] text-3xl" />
                        <input
                            type="text"
                            placeholder={pageContent[path].actionPrimary}
                            className="focus:outline-none bg-transparent text-white placeholder-gray-300" />
                    </div>

                    {
                        path == "/signUp" ?
                            <div className="w-full flex items-center justify-center gap-5 bg-[#252D4A] p-6 rounded-xl">
                                <MdEmail className="text-[#B0E2FF] text-3xl" />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="focus:outline-none bg-transparent text-white placeholder-gray-300" />
                            </div> : null
                    }

                    <div className="w-full flex items-center justify-center gap-5 bg-[#252D4A] p-6 rounded-xl">
                        <PiLockKeyBold className="text-[#B0E2FF] text-3xl" />
                        <input
                            type="password"
                            placeholder={pageContent[path].actionSecondary}
                            className="focus:outline-none bg-transparent text-white placeholder-gray-300" />
                    </div>
                </div>
            </section>

            <div className="w-full flex justify-center mt-10">
                <button className="w-3/4 p-2 bg-[#252D4A] rounded-xl">
                    {path == "/login" ? "Entrar" : "Criar conta"}
                </button>
            </div>

            {
                path !== "/signUp" ?
                    <div className="w-full text-center mt-5">
                        <NavLink to="/signUp">Criar conta</NavLink>
                    </div> : null
            }

            <section className="w-full flex gap-2 justify-center items-center fixed bottom-5">
                <GiLovers className="text-[#B0E2FF] text-3xl" />
                <span className="bg-gradient-to-r from-[#7FD1CC] to-[#9694F5] bg-clip-text text-transparent">Boy Love Br</span>
            </section>
        </div>
    )
}