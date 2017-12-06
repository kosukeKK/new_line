import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as io from 'socket.io-client';

const socket = io.connect('http://localhost:3001');
socket.on('publish', function (result: string) { console.log(result); });

interface HelloProps {
  name: string;
}

const Hello: React.SFC<HelloProps> = (props) => (
  <div>
    Hello {props.name}!
    <button onClick={() => sample()} />
  </div>
);


const sample = () => {
  socket.emit('publish', { value: 'hello' });
};


Hello.defaultProps = {
  name: 'David',
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name='React' />,
    document.getElementById('root'),
  );
});
