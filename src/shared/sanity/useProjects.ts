import {reactive} from "vue";
import {sanity} from "./client";
import fallback from "@/shared/const/projects.ts";

// Drop-in reactive replacement for the static `projects` map.
// Starts from the in-code content (links + screenshots live here), then merges
// the editable texts (title, description, pills) from Sanity, matched by slug.
const projects = reactive(structuredClone(fallback));

const PROJECTS_QUERY = `*[_type == "project"]{ "name": slug.current, title, description, pills }`;

let started = false;

export function useProjects() {
  if (!started) {
    started = true;
    sanity
      .fetch(PROJECTS_QUERY)
      .then((docs) => {
        if (!docs?.length) return;
        for (const d of docs) {
          const p = (projects as Record<string, any>)[d.name];
          if (!p) continue;
          if (d.title) p.title = d.title;
          if (d.description) p.description = d.description;
          if (d.pills?.length) p.pills = d.pills;
        }
      })
      .catch((e) => console.warn("[sanity] projects fetch failed:", e));
  }
  return projects;
}
