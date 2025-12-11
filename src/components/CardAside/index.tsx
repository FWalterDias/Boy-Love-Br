import { Link } from "react-router"
import type { ContentType } from "../../types/contentType"
import { useCurrentContent } from "../../context/useCurrentContent"
import start from "../../assets/star.png"

export function CardAside({ content }: { content: ContentType }) {

    const { setCurrentContent } = useCurrentContent();

    return (
        <Link
            to={`/home/${content.id}`}
            onClick={() => setCurrentContent(content)}
            className="w-full flex justify-start bg-[#181C2A] rounded-lg p-2"
        >
            <div className="w-3xs h-30 flex justify-start">
                <img
                    src={content.imgContent}
                    alt="img-card"
                    className="w-16 h-24"
                />
            </div>

            <div className="w-full flex flex-col items-between">
                <div>
                    <p className="text-sm">{content.titleContent}</p>
                    <p className="text-xs font-comic text-[#8D95AF]">{content.producer}</p>
                </div>
                <div className="flex gap-1">
                    <div className="w-[15px]">
                        <img
                            src={start}
                            alt="img-star"
                            className="w-full"
                        />
                    </div>
                    <div>
                        <p className="text-xs font-extralight">IMDB</p>
                        <p className="text-xs font-extralight">{content.imdb}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}