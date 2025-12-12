import categoryColored from "../assets/category_colored.png"
import discoverColored from "../assets/discover_colored.png"
import homeColored from "../assets/home_colored.png"
import type { titleRoutesType } from "../types/titeRoutesType"

export const titleRoutes: Record<string, titleRoutesType> = {
    "/home": {
        name: "Início",
        icon: homeColored,
    },
    "/home/discover": {
        name: "Discover",
        icon: discoverColored
    }
}
