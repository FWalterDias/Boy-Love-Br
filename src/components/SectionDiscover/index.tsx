import { CardDiscover } from "../CardDiscover"
import { dataCards } from "../../utils/dataCards"
import type { ContentType } from "../../types/contentType"

export function SectionDiscover() {
    return (
        <section className="w-full">
            <div className="w-full grid grid-cols-2 place-items-center gap-5 mt-10">
                {
                    dataCards.length > 1 ? dataCards.map((content: ContentType, indice) => (
                        <CardDiscover key={indice} content={content} />
                    )) : null
                }
            </div>
        </section>
    )
}