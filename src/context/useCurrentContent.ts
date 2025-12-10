import { create } from "zustand"
import type { CurrentContentStore } from "../types/currentContentTypes"
import { persist } from "zustand/middleware"


export const useCurrentContent = create<CurrentContentStore>()(
  persist(
    (set) => ({
      currentContent: null,

      setCurrentContent: (content) =>
        set({
          currentContent: content,
        }),
    }),
    {
      name: "current-content",
      partialize: (state) => ({ currentContent: state.currentContent }),
    }
  )
);