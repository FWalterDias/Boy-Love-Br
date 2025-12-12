import { NavLink } from "react-router"
import categoryColored from "../../assets/category_colored.png"
import categoryGray from "../../assets/category_gray.png"
import discoverColored from "../../assets/discover_colored.png"
import discoverGray from "../../assets/discover_gray.png"
import homeColored from "../../assets/home_colored.png"
import homeGray from "../../assets/home_gray.png"
import { usePath } from "../../hooks/usePath"

export function NavBarDesktop() {

     const { path } = usePath();

    return (
        <nav className="max-w-3xs h-full flex flex-col gap-5 bg-[#181C2A] rounded-lg px-4 py-30">
            <NavLink to="/home"
                className={path === "/home" ?
                    "flex gap-2 items-center justify-start pl-5 border-l-4 border-transparent [border-image:linear-gradient(to_bottom,#7FD1CC,#9694F5)_1] font-bold text-lg" :
                    "flex gap-2 items-center justify-start pl-5 border-l-4 border-none"}
            >
                <img
                    className="w-5"
                    src={path == "/home" ? homeColored : homeGray}
                    alt=""
                />
                <span>
                    Home
                </span>
            </NavLink>

            <NavLink to="/home/discover"
                className={({ isActive }) =>
                    isActive ?
                        "flex gap-2 items-center justify-start pl-5 border-l-4 border-transparent [border-image:linear-gradient(to_bottom,#7FD1CC,#9694F5)_1] font-bold text-lg" :
                        "flex gap-2 items-center justify-start pl-5 border-l-4 border-none"}
            >
                <img
                    className="w-5"
                    src={path == "/home/discover" ? discoverColored : discoverGray}
                    alt=""
                />
                <span>
                    Explorar
                </span>
            </NavLink>

            <NavLink to="/home/category"
                className={({ isActive }) =>
                    isActive ?
                        "flex gap-2 items-center justify-start pl-5 border-l-4 border-transparent [border-image:linear-gradient(to_right,#7FD1CC,#9694F5)_1] font-bold text-lg invisible" :
                        "flex gap-2 items-center justify-start pl-5 border-l-4 invisible"}
            >
                <img
                    className="w-5"
                    src={path == "/home/category" ? categoryColored : categoryGray}
                    alt=""
                />
            </NavLink>
        </nav>

    )
}