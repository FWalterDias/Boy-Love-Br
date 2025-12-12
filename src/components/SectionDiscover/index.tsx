import { CardDiscover } from "../CardDiscover"
import { dataCards } from "../../database/dataCards"
import type { ContentType } from "../../types/contentType"

export function SectionDiscover() {
    return (
        <section className="w-full pt-8">
            <div className="w-full grid grid-cols-2 lg:grid-cols-4 place-items-center gap-5 mt-8">
                {
                    dataCards.length > 1 ? dataCards.map((content: ContentType, indice) => (
                        <CardDiscover key={indice} content={content} />
                    )) : null
                }
            </div>
        </section>
    )
}