import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addMessage, currentMessage } from '../actions';

const App = (that: any) => {
    let input: any;
    return (
        <div>
            <h1>トークしたい</h1>
            <input type='text' ref={(node) => { input = node; }} />
            <button onClick={() => sendMessage(that.dispatch, input)} >＞</button>
            <ul>
                {talkList(that.state)}
            </ul>
        </div>
    );
};

const sendMessage = (dispatch: any, input: any) => {
    dispatch(addMessage(input.value));
};

const mapToStateProps = (state: any) => {
    return { state };
};

const talkList = (messages: any) => {
    let list: Array<any> = [];
    for (let i = 1; i < messages.length; i++) {
        list.push(<li key={messages[i].id}>{messages[i].message}</li>);
    }
    return list;
};


export default connect(mapToStateProps)(App);
