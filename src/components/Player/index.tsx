import start from "../../assets/star.png"
import { useCurrentContent } from "../../store/useCurrentContent"

export function Player() {

    const { currentContent } = useCurrentContent();

    if (currentContent === null){
        return alert("sem conteudo");   
    } 
    
    return (
        <section className="w-full flex flex-col bg-[#181C2A] rounded-lg p-2 mt-5">

            <div className="w-full h-42 flex items-center justify-center border border-dashed border-white/30 rounded-md">
                <p className="text-sm font-extralight">
                    Player disponível em breve...
                </p>
            </div>

            <div className="w-full flex mt-8">
                <div className="w-[150px]">
                    <img
                        src={currentContent.imgContent}
                        alt="img-card"
                        className="w-full"
                    />
                </div>
                <div className="w-full p-2">
                    <div className="w-full flex justfy-between">
                        <div className="w-full">
                            <p className="text-sm font-bold tracking-wide">{currentContent.titleContent}</p>
                            <p className="text-sm text-[#8D95AF]">{currentContent.producer}</p>
                        </div>
                        <div className="w-full flex justify-end gap-1">
                            <div>
                                <p className="text-xs">IMDB</p>
                                <p className="text-xs">{currentContent.imdb}</p>
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
                        <p className="w-full font-regular text-xs text-[#D1D6E4] font-comic">
                            {currentContent.summary}
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <p className="font-regular text-xs text-[#F8F9FC]">Ultima atualização</p>
                <p className="font-regular text-xs text-[#8D95AF] font-comic">
                    {currentContent.lastUpdate.replace(/-/g, "/")}
                </p>
            </div>
        </section>
    )
}