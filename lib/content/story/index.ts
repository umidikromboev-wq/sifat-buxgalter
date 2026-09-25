import type { Locale } from "../types";
import { storyRu } from "./ru";
import type { Story } from "./types";
import { storyUz } from "./uz";

const STORY: Record<Locale, Story> = { uz: storyUz, ru: storyRu };

export const getStory = (lang: Locale): Story => STORY[lang];
