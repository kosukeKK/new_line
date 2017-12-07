interface Message {
    addMessage: string;
    currentMessage: string;
}

export const message: Message = {
    addMessage: 'ADD_MESSAGE',
    currentMessage: 'CURRENT_MESSAGE',
};
