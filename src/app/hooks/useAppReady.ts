import { ref } from "vue";

// Приложение монтируется СРАЗУ, под сплэшем-лоадером, а не после него.
// Весь дорогой mount-кост (создание DOM, пересчёт стилей, layout, декод картинок,
// инициализация WebGL-контекста) уходит за лоадер — ради этого он и нужен.
//
// Но входные анимации так стартовать не должны: иначе они отыграют за сплэшем
// и пользователь увидит их уже законченными. Поэтому компоненты ждут whenAppReady()
// перед тем, как строить свои GSAP-таймлайны. Это дёшево — в отличие от монтирования.
const appReady = ref(false);

let resolveReady: () => void;
const readyPromise = new Promise<void>((resolve) => {
    resolveReady = resolve;
});

export const markAppReady = () => {
    if (appReady.value) return;
    appReady.value = true;
    resolveReady();
};

// Резолвится, когда лоадер убран и контент реально показан пользователю.
export const whenAppReady = () => readyPromise;

export const useAppReady = () => appReady;
