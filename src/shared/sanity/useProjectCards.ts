import {ref} from "vue";
import {sanity} from "./client";
import fallback from "@/shared/const/projectCards.ts";

// Reactive /projects list tiles. Starts from the in-code list (fallback),
// then replaced by the Sanity list (ordered) when it loads.
const cards = ref(fallback);

const CARDS_QUERY = `*[_type == "projectCard"] | order(order asc){
  "id": _id, title, subtitle, category, year, icon, img, path
}`;

let started = false;

export function useProjectCards() {
    if (!started) {
        started = true;
        sanity
            .fetch(CARDS_QUERY)
            .then((docs) => {
                if (docs?.length) cards.value = docs;
            })
            .catch((e) => console.warn("[sanity] project cards fetch failed:", e));
    }
    return cards;
}
