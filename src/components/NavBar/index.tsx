import { ImHome } from "react-icons/im"
import { LuFolderArchive } from "react-icons/lu"
import { TbWorldSearch } from "react-icons/tb"
import { NavLink, useLocation } from "react-router"

export function NavBar() {

    const path: string = useLocation().pathname;

    return (
        <nav className="w-full h-[45px] flex justify-evenly items-center bg-[#181C2A] p-3 rounded-lg">
            <NavLink to="/home"
                className={({ isActive }) =>
                    isActive ? "border-b-2 border-[transparent] [border-image:linear-gradient(to_right,#7FD1CC,#9694F5)_1]" : ""}>
                <ImHome
                    className="text-4xl"
                    style={{
                        fill: path === "/home" ? "url(#icon-gradient)" : ""
                    }}
                />

                <svg width="0" height="0">
                    <defs>
                        <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7FD1CC" />
                            <stop offset="100%" stopColor="#9694F5" />
                        </linearGradient>
                    </defs>
                </svg>
            </NavLink>

            <NavLink to="/search"
                className={({ isActive }) =>
                    isActive ? "border-b-2 border-[transparent] [border-image:linear-gradient(to_right,#7FD1CC,#9694F5)_1]" : ""}>
                <TbWorldSearch
                    className="text-4xl"
                    style={{
                        fill: path === "/search" ? "url(#icon-gradient-search)" : ""
                    }}
                />

                <svg width="0" height="0">
                    <defs>
                        <linearGradient id="icon-gradient-search" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7FD1CC" />
                            <stop offset="100%" stopColor="#9694F5" />
                        </linearGradient>
                    </defs>
                </svg>
            </NavLink>


            <NavLink to="/category"
                className={({ isActive }) =>
                    isActive ? "border-b-2 border-[transparent] [border-image:linear-gradient(to_right,#7FD1CC,#9694F5)_1]" : ""}>
                <LuFolderArchive
                    className="text-4xl"
                    style={{
                        fill: path === "/category" ? "url(#icon-gradient-category)" : ""
                    }}
                />

                <svg width="0" height="0">
                    <defs>
                        <linearGradient id="icon-gradient-category" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7FD1CC" />
                            <stop offset="100%" stopColor="#9694F5" />
                        </linearGradient>
                    </defs>
                </svg>
            </NavLink>

        </nav >
    )
}