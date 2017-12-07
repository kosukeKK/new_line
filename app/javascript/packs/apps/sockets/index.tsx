import * as io from 'socket.io-client';
let socket = io.connect('http://localhost:3001');
import { addMessage } from '../actions';
import store from '../store';
export const webSocketModule = () => {
    return socket.on('publish', (res: any) => store.dispatch(addMessage(res.value)));
};
