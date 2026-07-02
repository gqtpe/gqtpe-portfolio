import { onMounted, ref } from "vue";
import ava from "@/assets/img/profile.jpg";

// Critical above-the-fold assets to warm into cache during the loading splash,
// so the page renders without image pop-in / jank once the splash clears.
// The content is hidden behind the splash, so a document.images scan would find
// nothing — we preload an explicit list instead.
const CRITICAL_IMAGES = [
    ava,
    "/home.jpg",
    "/about.jpg",
    "/01hero.jpg",
    "/02hero.jpg",
    "/03hero.jpg",
    "/04hero.jpg",
];

export const useLoadingMedia = () => {
    const isLoaded = ref(false);

    onMounted(async () => {
        try {
            await Promise.race([
                waitForAssets(),
                new Promise(resolve => setTimeout(resolve, 7000)),
            ]);
        } catch (e) {
            console.warn("Ошибка при предзагрузке:", e);
        } finally {
            isLoaded.value = true;
        }
    });

    async function waitForAssets() {
        await Promise.all([
            document.fonts.ready,
            preloadImages(CRITICAL_IMAGES),
        ]);
    }

    function preloadImages(urls: string[]) {
        return Promise.all(
            urls.map(
                (src) =>
                    new Promise<void>((resolve) => {
                        const img = new Image();
                        img.onload = () => resolve();
                        img.onerror = () => resolve();
                        img.src = src;
                    })
            )
        );
    }

    return { isLoaded };
};
