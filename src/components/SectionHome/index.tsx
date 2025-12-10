import iconSearch from "../../assets/icon_search.png"
import type { ContentType } from "../../types/contentType"
import { dataCards } from "../../utils/dataCards"
import { CardHome } from "../CardHome"

export function SectionHome() {
    return (
        <section className="w-full">
            <div className="flex items-center w-full gap-5 mt-5">
                <p className="text-xs">Adicionados Recentemente</p>

                <div className="relative w-1/2">
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
            </div>

            <div className="w-full flex flex-col gap-5 mt-8">
                {
                    dataCards.length > 1 ? dataCards.map((content: ContentType) => (
                        <CardHome key={content.id} content={content} />
                    )) : null
                }
            </div>
        </section>
    )
}