import { Link } from "react-router"
import type { ContentType } from "../../types/contentType"

export function CardDiscover({ content }: { content: ContentType }) {
    return (
        <Link to="#" className="w-full flex flex-col bg-[#181C2A] rounded-lg p-2">
            <div className="w-full h-40 flex justify-center">
                <img
                    src={content.imgContent}
                    alt="img-card"
                    className="w-26 h-36"
                />
            </div>

            <div className="text-center">
                <p className="text-sm">{content.titleContent}</p>
                <p className="text-xs font-comic text-[#8D95AF]">{content.producer}</p>
            </div>
        </Link>
    )
}