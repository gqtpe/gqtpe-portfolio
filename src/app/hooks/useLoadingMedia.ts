import { nextTick, onMounted, ref } from "vue";

export const useLoadingMedia = () => {
    const isLoaded = ref(false);

    onMounted(async () => {
        await nextTick();

        try {
            await Promise.race([
                waitForFontsAndImages(),
                new Promise(resolve => setTimeout(resolve, 7000))
            ]);
        } catch (e) {
            console.warn("Ошибка при предзагрузке:", e);
        } finally {
            isLoaded.value = true;
        }
    });

    async function waitForFontsAndImages() {
        const promises = [];
        promises.push(document.fonts.ready);
        const imagePromises = Array.from(document.images).map((img) => {
            if (img.complete) return Promise.resolve();
            return new Promise((resolve) => {
                img.onload = resolve;
                img.onerror = resolve;
            });
        });

        promises.push(Promise.all(imagePromises));
        await Promise.all(promises);
    }

    return { isLoaded };
};