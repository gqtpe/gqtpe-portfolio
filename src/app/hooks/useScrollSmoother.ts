import {nextTick, onMounted, onUnmounted, ref, watch} from "vue";
import {useLoadingMedia} from "@/app/hooks/useLoadingMedia.ts";
import ScrollSmoother from "gsap/ScrollSmoother";

export function useScrollSmoother() {
    const smoother = ref<any>(null);
    const {isLoaded} = useLoadingMedia();

    onMounted(() => {
        watch(isLoaded, async (newIsLoaded) => {
            //loading is fulfilled and
            await nextTick();
            if (newIsLoaded && !smoother.value) {
                smoother.value = ScrollSmoother.create({
                    wrapper: "#main-wrapper",
                    content: "#main",
                });

            }
        });


    });
    onUnmounted(() => {
        if (smoother.value) {
            smoother.value.kill();
        }
    });
    return {isLoaded,scrollTo: scrollTo}
}