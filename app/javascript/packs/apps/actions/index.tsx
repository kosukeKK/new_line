import { message } from '../types';
let counter = 0;
export const addMessage = (text: string) => {
    return {type: message.addMessage, id: ++counter, text};
};

export const currentMessage = (text: string) => {
    return {type: message.currentMessage, text};
};
