import { createClient } from "@sanity/client";

// Public read-only client for fetching page content from Sanity.
// projectId/dataset live in .env (VITE_SANITY_*) — they are public by design.
export const sanity = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID || "4be3yyg0",
    dataset: import.meta.env.VITE_SANITY_DATASET || "production",
    apiVersion: "2025-01-01",
    useCdn: true, // cached, fast reads for public content
});
