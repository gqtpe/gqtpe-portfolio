//functions that return vueuse/motion presets
type Direction = "top" | "bottom" | "left" | "right";
type Variant = "visible"|"visibleOnce"|"enter"
//base Args interface
interface Args {
    delay?: number //ms
    variant?:Variant

}

interface SlideArgs extends Args {
    initDistance?: number
    direction?: Direction
}
//isMobile boolean variable for removing delay in mobile device cases
const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
function getSlidePreset({delay = 0,variant = 'visible',direction = 'bottom', initDistance = 100}:SlideArgs){
    let x:number;
    let y:number;
    if (isMobile) {
        delay = 0;
    }
    switch(direction){
        case "top":{
            y = -initDistance;
            x = 0;
            break;
        }
        case "bottom":{
            y = initDistance;
            x = 0;
            break;
        }
        case "left":{
            x = -initDistance;
            y = 0;
            break;
        }
        case "right":{
            x = initDistance;
            y = initDistance;
            break;
        }

    }
    return {
        initial: {opacity: 0, y, x, transition: { type: 'spring',
                stiffness: 250,
                damping: 25,
                mass: 0.5,}},
        [variant]: {opacity: 1, y: 0, x:0, transition: { type: 'spring',
                stiffness: 250,
                damping: 25,
                mass: 0.5,
                delay:delay,
            }}
    }
}

function getFadePreset({delay,variant = 'visible',}:Args){
    if (isMobile) {
        delay = 0;
    }
    return {
        initial: {opacity: 0 , transition: { type: 'spring',
                stiffness: 250,
                damping: 25,
                mass: 0.5,}},
        [variant]: {opacity: 1, transition: { type: 'spring',
                stiffness: 250,
                damping: 25,
                mass: 0.5,
                delay:delay,
            }}
    }
}
function getPopupPreset({delay,variant = 'visible',}:Args){
    if (isMobile) {
        delay = 0;
    }
    return {
        initial: {opacity: 0, scale: 0, transition: { type: 'spring',
                stiffness: 250,
                damping: 25,
                mass: 0.5,}},
        [variant]: {opacity: 1,scale: 1, transition: { type: 'spring',
                stiffness: 250,
                damping: 25,
                mass: 0.5,
                delay:delay,
            }}
    }
}


export {
    getSlidePreset,
    getFadePreset,
    getPopupPreset
}