import { NavLink, useLocation } from "react-router"
import categoryColored from "../../assets/category_colored.png"
import categoryGray from "../../assets/category_gray.png"
import homeColored from "../../assets/home_colored.png"
import homeGray from "../../assets/home_gray.png"
import searchColored from "../../assets/search_colored.png"
import searchGray from "../../assets/search_gray.png"

export function NavBar() {

    const path: string = useLocation().pathname;

    return (
        <nav className="w-full h-[45px] flex justify-evenly items-center bg-[#181C2A] p-3 rounded-lg">
            <NavLink to="/home"
                className={({ isActive }) =>
                    isActive ? "h-full border-b-2 border-[transparent] [border-image:linear-gradient(to_right,#7FD1CC,#9694F5)_1]" : ""}>
                <img
                    className="h-full"
                    src={path == "/home" ? homeColored : homeGray}
                    alt=""
                />
            </NavLink>

            <NavLink to="/search" 
            className={({ isActive }) =>
                isActive ? "h-full border-b-2 border-[transparent] [border-image:linear-gradient(to_right,#7FD1CC,#9694F5)_1]" : "h-full"}>
                <img
                    className="h-full"
                    src={path == "/search" ? searchColored : searchGray}
                    alt=""
                />
            </NavLink>

            <NavLink to="/category" 
            className={({ isActive }) =>
                isActive ? "h-full border-b-2 border-[transparent] [border-image:linear-gradient(to_right,#7FD1CC,#9694F5)_1]" : "h-full"}>
                <img
                    className="h-full"
                    src={path == "/category" ? categoryColored : categoryGray}
                    alt=""
                />
            </NavLink>
        </nav >
    )
}