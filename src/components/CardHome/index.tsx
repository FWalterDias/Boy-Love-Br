import { Link } from "react-router"
import start from "../../assets/star.png"
import type { ContentType } from "../../types/contentType"

export function CardHome({ content }: { content: ContentType }) {
    return (
        <section className="w-full flex flex-col bg-[#181C2A] rounded-lg p-2">
            <div className="w-full flex">
                <div className="w-[150px]">
                    <img
                        src={content.imgContent}
                        alt="img-card"
                        className="w-full"
                    />
                </div>
                <div className="w-full p-2">
                    <div className="w-full flex justfy-between">
                        <div className="w-full">
                            <p className="text-2xl font-bold tracking-wide">{content.titleContent}</p>
                            <p className="text-2xl text-[#8D95AF]">{content.producer}</p>
                        </div>
                        <div className="w-full flex justify-end">
                            <div>
                                <p className="text-lg">IMDB</p>
                                <p className="text-lg">{content.imdb}</p>
                            </div>
                            <div className="w-[15px]">
                                <img
                                    src={start}
                                    alt="img-star"
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full text-justify mt-5">
                        <p className="w-full font-regular text-xl text-[#D1D6E4] font-comic line-clamp-4">
                            {content.summary}
                        </p>
                        <Link
                            to="#"
                            className="font-regular text-xl text-[#208AAE] font-comic"
                        >
                            ver mais
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <p className="font-regular text-lg text-[#F8F9FC]">Ultima atualização</p>
                <p className="font-regular text-lg text-[#8D95AF] font-comic">
                    {content.lastUpdate.replace(/-/g, "/")}
                </p>
            </div>
        </section>
    )
}