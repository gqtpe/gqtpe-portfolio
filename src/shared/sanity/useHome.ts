import {reactive} from "vue";
import {sanity} from "./client";

// Reactive home-page texts. In-code defaults render instantly and act as the
// fallback; Sanity homeInfo is merged in when it loads.
const home = reactive({
    heroTitle: "gqtpe",
    heroSubtitle: "front-end developer",
    heroBadges: ["Welcome", "Est. 2025"] as [string, string],
    whoAmITitle: "who i am?",
});

const HOME_QUERY = `*[_id == "homeInfo"][0]{ heroTitle, heroSubtitle, heroBadges, whoAmITitle }`;

let started = false;
let ready: Promise<void> = Promise.resolve();

export function useHome() {
    if (!started) {
        started = true;
        ready = sanity
            .fetch(HOME_QUERY)
            .then((d) => {
                if (!d) return;
                if (d.heroTitle) home.heroTitle = d.heroTitle;
                if (d.heroSubtitle) home.heroSubtitle = d.heroSubtitle;
                if (Array.isArray(d.heroBadges) && d.heroBadges.length === 2) {
                    home.heroBadges = [d.heroBadges[0], d.heroBadges[1]];
                }
                if (d.whoAmITitle) home.whoAmITitle = d.whoAmITitle;
            })
            .catch((e) => console.warn("[sanity] home fetch failed:", e));
    }
    return home;
}

// Резолвится, когда тексты из CMS доехали (или запрос упал).
// Лоадер ждёт этот промис, чтобы подмена контента произошла ЗА сплэшем:
// иначе heroTitle приезжает уже после того, как SplitText разбил старый
// заголовок, Vue затирает разбитый DOM и анимация ломается.
export const homeReady = () => {
    useHome();
    return ready;
};
