import { message } from '../types';
const rootReducers = (state = {}, action: any) => {
    switch (action.type) {
        case message.addMessage:
            return state;
        default:
            return state;
    }
};

export default rootReducers;

