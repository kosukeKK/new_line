import * as React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';
import { createStore } from 'redux';
import {webSocketModule} from './sockets';
webSocketModule();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
