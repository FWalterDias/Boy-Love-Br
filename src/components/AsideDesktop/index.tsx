import { Link } from "react-router"
import iconSearch from "../../assets/icon_search.png"
import { dataCards } from "../../database/dataCards"
import { CardAside } from "../CardAside"
import type { ContentType } from "../../types/contentType"

export function AsideDesktop() {
    return (
        <aside className="hidden lg:block w-full h-full lg:col-span-1 pt-18">
            <div className="relative w-full">
                <img
                    src={iconSearch}
                    alt="iconSearch"
                    className="w-3.5 absolute top-1/4"
                />

                <input
                    type="text"
                    name="searchInput"
                    id="searchInput"
                    className="border-b w-full focus:outline-none pl-5 text-sm leading-none"
                />
            </div>

            <div className="w-full flex justify-between mt-5">
                <p className="text-sm">Series Populares</p>
                <Link to="#" className="text-sm text-[#208AAE]">Ver Todos</Link>
            </div>

            <div className="flex flex-col gap-5">
                {
                    dataCards.length > 1 ? dataCards.map((content: ContentType, indice) => (
                        <CardAside key={indice} content={content} />
                    )) : null
                }
            </div>
        </aside>
    )
}