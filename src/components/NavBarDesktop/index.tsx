import { NavLink, useLocation } from "react-router"
import categoryColored from "../../assets/category_colored.png"
import categoryGray from "../../assets/category_gray.png"
import homeColored from "../../assets/home_colored.png"
import homeGray from "../../assets/home_gray.png"
import discoverColored from "../../assets/discover_colored.png"
import discoverGray from "../../assets/discover_gray.png"

export function NavBarDesktop() {

    const path: string = useLocation().pathname;

    return (
        <nav className="max-w-3xs h-full flex flex-col gap-5 bg-[#181C2A] rounded-lg px-4 py-30">
            <NavLink to="/home"
                className={path === "/home" ?
                    "flex gap-2 items-center justify-center border-l-2 border-transparent [border-image:linear-gradient(to_bottom,#7FD1CC,#9694F5)_1]" :
                    "flex gap-2 items-center justify-center border-l-2 border-none"}
            >
                <img
                    className="w-5"
                    src={path == "/home" ? homeColored : homeGray}
                    alt=""
                />
                <p>
                    Home
                </p>
            </NavLink>

            <NavLink to="/home/discover"
                className={({ isActive }) =>
                    isActive ?
                        "flex gap-2 items-center justify-center border-l-2 border-transparent [border-image:linear-gradient(to_bottom,#7FD1CC,#9694F5)_1]" :
                        "flex gap-2 items-center justify-center border-l-2 border-none"}
            >
                <img
                    className="w-5"
                    src={path == "/home/discover" ? discoverColored : discoverGray}
                    alt=""
                />
                <p>
                    Explorar
                </p>
            </NavLink>

            <NavLink to="/home/category"
                className={({ isActive }) =>
                    isActive ?
                        "flex gap-2 items-center justify-center border-l-2 border-transparent [border-image:linear-gradient(to_right,#7FD1CC,#9694F5)_1] invisible" :
                        "flex gap-2 items-center justify-center border-l-2 invisible"}
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