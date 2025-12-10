import { NavLink, useLocation } from "react-router"
import categoryColored from "../../assets/category_colored.png"
import categoryGray from "../../assets/category_gray.png"
import homeColored from "../../assets/home_colored.png"
import homeGray from "../../assets/home_gray.png"
import discoverColored from "../../assets/discover_colored.png"
import discoverGray from "../../assets/discover_gray.png"

export function NavBar() {

    const path: string = useLocation().pathname;

    return (
        <nav className="w-full h-[45px] flex justify-evenly items-center bg-[#181C2A] p-3 rounded-lg">
            <NavLink to="/home"
                className={path === "/home" ? "h-full pb-1 border-b-2 border-transparent [border-image:linear-gradient(to_right,#7FD1CC,#9694F5)_1]" : "h-full"}>
                <img
                    className="w-10"
                    src={path == "/home" ? homeColored : homeGray}
                    alt=""
                />
            </NavLink>

            <NavLink to="/home/discover"
            className={({ isActive }) =>
                isActive ? "h-full pb-1  border-b-2 border-transparent [border-image:linear-gradient(to_right,#7FD1CC,#9694F5)_1]" : "h-full"}>
                <img
                    className="w-10"
                    src={path == "/home/discover" ? discoverColored : discoverGray}
                    alt=""
                />
            </NavLink>

            <NavLink to="/home/category" 
            className={({ isActive }) =>
                isActive ? "h-full pb-1  border-b-2 border-transparent [border-image:linear-gradient(to_right,#7FD1CC,#9694F5)_1]" : "h-full"}>
                <img
                    className="w-10"
                    src={path == "/home/category" ? categoryColored : categoryGray}
                    alt=""
                />
            </NavLink>
        </nav >
    )
}