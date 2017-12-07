import { message } from '../types';

const initialState = {
    id: 0,
    message: '',
};

const addMessage = (action: any) => {
    return {id: action.id, message: action.text};
};



const rootReducers = (state = [{id: 0, message: ''}], action: any) => {
    switch (action.type) {
        case message.addMessage:
        let aaa = addMessage(action);
            return [...state, aaa];
        default:
            return state;
    }
};

export default rootReducers;

