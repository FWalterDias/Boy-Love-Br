import { Logo } from "../../components/Logo"
import { NavBar } from "../../components/NavBar"
import iconSearch from "../../assets/icon_search.png"
import { Card } from "../../components/Card"
import { dataCards } from "../../utils/dataCards"
import type { ContentType } from "../../types/contentType"

export function Home() {
    return (
        <div className="w-full flex flex-col gap-2 items-center justify-evenly">
            <div className="w-full">
                <Logo />
            </div>

            <section className="w-lg mt-8">
                <NavBar />
            </section>

            <section className="flex items-center w-full gap-5 mt-10">
                <p className="text-xl">Adicionados Recentemente</p>

                <div className="relative w-1/2">
                    <img
                        src={iconSearch}
                        alt="iconSearch"
                        className="w-[20px] absolute"
                    />

                    <input
                        type="text"
                        name="searchInput"
                        id="searchInput"
                        className="border-b w-full focus:outline-none pl-10 text-xl leading-none"
                    />
                </div>
            </section>

            <section className="w-full flex flex-col gap-5 mt-10">
                {
                    dataCards.length > 1 ? dataCards.map((content: ContentType, indice) => (
                        <Card key={indice} content={content}  />
                    )) : null
                }
            </section>
        </div>
    )
}