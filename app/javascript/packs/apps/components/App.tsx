import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addMessage } from '../actions';
import * as io from 'socket.io-client';
let socket = io.connect('http://localhost:3001');


const App = (that: any) => {
    let input: any;
    return (
        <div>
            <h1>トークしたい</h1>
            <input type='text' ref={(node) => { input = node; }} />
            <button onClick={() => sendMessage(input)} >＞</button>
            <ul>
                {talkList(that.state)}
            </ul>
        </div>
    );
};

const sendMessage = (input: any) => {
    socket.emit('publish', {value: input.value});
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
