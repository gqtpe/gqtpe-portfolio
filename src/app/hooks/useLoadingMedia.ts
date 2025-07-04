import {nextTick, onMounted, ref} from "vue";


export const useLoadingMedia = () => {
    const isLoaded = ref(false);
    onMounted(async () => {
        await nextTick(); // Ждём рендеринг
        await waitForFontsAndImages();

    });

    async function waitForFontsAndImages() {
        //waiting all fonts is loaded
        await document.fonts.ready;
        //waiting all images is loaded
        const images = Array.from(document.images).map(
            (img) =>
                img.complete
                    ? Promise.resolve()
                    : new Promise((resolve) => (img.onload = img.onerror = resolve))
        );

        await Promise.all(images);
    }
    return {isLoaded}
}