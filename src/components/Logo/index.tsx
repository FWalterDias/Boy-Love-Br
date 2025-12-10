import { GiLovers } from "react-icons/gi"
import { Link, useLocation } from "react-router"

export function Logo() {

    const outRoutes: string[] = ["/", "/login", "/signUp"];

    const path: string = useLocation().pathname;

    return (
        <Link to={outRoutes.includes(path) ? "/" : "/home"} className="w-full flex gap-2 justify-center items-center">
            <GiLovers className="text-[#B0E2FF] text-3xl" />
            <span className="bg-linear-to-r from-[#7FD1CC] to-[#9694F5] bg-clip-text text-transparent font-bold text-3xl">Boy Love BR</span>
        </Link>
    )
}