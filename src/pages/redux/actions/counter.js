/**
 * 相当与，先建立一套关于action的type
 * @type {string}
 */
export const INCREMENT =  "couter/INCREMENT";
export const DECREMENT =  "couter/DECREMENT";
export const RESET =  "couter/RESET";

export function increment(){
    return {type:INCREMENT};
}

export function decrement(){
    return {type:DECREMENT};
}

export function reset(){
    return {type:RESET};
}


