import { useLocation } from "react-router";

export function usePath() {
    const path: string = useLocation().pathname;
    
    return {
        path
    }
}