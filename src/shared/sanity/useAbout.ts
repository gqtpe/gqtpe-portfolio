import {reactive} from "vue";
import {sanity} from "./client";
import fallback from "@/shared/const/about.ts";

// Drop-in reactive replacement for the static `about` content.
// Starts with the in-code content (fallback) so the page renders instantly and
// still works offline / before Sanity CORS is set, then merges the text content
// from Sanity when it loads. Images, social icons and the tech-stack SVGs stay
// in code — only editable texts come from the CMS.
const about = reactive(structuredClone(fallback));

const ABOUT_QUERY = `*[_id == "aboutInfo"][0]{
  hero,
  subtitles,
  "experience": experience[]{ "id": _key, title, period, body },
  "education": education[]{ "id": _key, title, period, body },
  "languages": languages[]{ "id": _key, name, level, value }
}`;

let started = false;
let ready: Promise<void> = Promise.resolve();

export function useAbout() {
  if (!started) {
    started = true;
    ready = sanity
      .fetch(ABOUT_QUERY)
      .then((doc) => {
        if (!doc) return;
        if (doc.hero) about.info.hero = doc.hero;
        if (doc.subtitles?.length) about.info.subtitles = doc.subtitles;
        if (doc.experience?.length) about.info.cards.experience = doc.experience;
        if (doc.education?.length) about.info.cards.education = doc.education;
        if (doc.languages?.length) about.languages = doc.languages;
      })
      .catch((e) => console.warn("[sanity] about fetch failed:", e));
  }
  return about;
}

// Резолвится, когда тексты из CMS доехали (или запрос упал). Лоадер ждёт его,
// чтобы подмена subtitles/experience/education не вызывала ререндер и пересчёт
// позиций ScrollTrigger уже после того, как страница показана пользователю.
export const aboutReady = () => {
  useAbout();
  return ready;
};
