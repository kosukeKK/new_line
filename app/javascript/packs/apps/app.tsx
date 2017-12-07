import * as React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
// import store from './store';
import { createStore } from 'redux';
import rootReducers from './reducers';
const store = createStore(rootReducers);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
