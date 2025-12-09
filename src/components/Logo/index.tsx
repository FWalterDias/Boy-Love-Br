import { GiLovers } from "react-icons/gi";

export function Logo() {
    return (
        <div className="w-full flex gap-2 justify-center items-center">
            <GiLovers className="text-[#B0E2FF] text-3xl" />
            <span className="bg-gradient-to-r from-[#7FD1CC] to-[#9694F5] bg-clip-text text-transparent">Boy Love BR</span>
        </div>
    )
}