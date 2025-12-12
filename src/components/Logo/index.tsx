import { GiLovers } from "react-icons/gi";
import { Link } from "react-router";
import { usePath } from "../../hooks/usePath";

export function Logo() {

    const outRoutes: string[] = ["/", "/login", "/signUp"];

    const { path } = usePath();

    return (
        <Link
            to={outRoutes.includes(path) ? "/" : "/home"}
            className="w-full flex gap-2 justify-center items-center lg:absolute top-2"
        >
            <GiLovers className="text-[#B0E2FF] text-2xl" />
            <span className="bg-linear-to-r from-[#7FD1CC] to-[#9694F5] bg-clip-text text-transparent font-bold text-2xl">Boy Love BR</span>
        </Link>
    )
}