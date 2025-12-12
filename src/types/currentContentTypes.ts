import type { ContentType } from "./contentType";

export type CurrentContentStore = {
  currentContent: ContentType | null
  setCurrentContent: (content: ContentType) => void
}
