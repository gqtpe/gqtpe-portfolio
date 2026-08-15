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
            preloadStack(),
            preloadContent(),
        ]);
    }

    // Тексты из Sanity. Без этого ответ прилетает уже после снятия лоадера
    // и подменяет реактивный контент на живой странице — ререндер, пересчёт
    // layout и сбитые позиции ScrollTrigger.
    //
    // Отдельный короткий таймаут, а не общий 7-секундный: если CMS недоступна,
    // @sanity/client уходит в серию ретраев, и ждать их до конца — значит держать
    // лоадер на экране дольше, чем идёт анимация каунтапа. Контент не критичен:
    // в коде есть полный фолбэк, и если ответ опоздал — просто применится позже.
    const CONTENT_BUDGET_MS = 3000;

    async function preloadContent() {
        try {
            const [{homeReady}, {aboutReady}] = await Promise.all([
                import("@/shared/sanity/useHome.ts"),
                import("@/shared/sanity/useAbout.ts"),
            ]);
            await Promise.race([
                Promise.all([homeReady(), aboutReady()]),
                new Promise(resolve => setTimeout(resolve, CONTENT_BUDGET_MS)),
            ]);
        } catch (e) {
            console.warn("Не удалось предзагрузить контент CMS:", e);
        }
    }

    // Логотипы стека (LogoLoop на /about и в блоке about) дублируются в несколько
    // копий — это ~100 <img>. Если их не прогреть, весь декод приходится на момент
    // снятия лоадера. Импорт динамический, чтобы чанк не утяжелял первый рендер сплэша.
    async function preloadStack() {
        try {
            const {aboutSVGs} = await import("@/assets/svg");
            await preloadImages(aboutSVGs);
        } catch (e) {
            console.warn("Не удалось предзагрузить иконки стека:", e);
        }
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
