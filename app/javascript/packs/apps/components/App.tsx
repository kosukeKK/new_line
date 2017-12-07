import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect } from 'react-redux';

const App = (that: any) => (
    <div>
        ssss
        {console.log(1234)}
    </div>
);

const mapToStateProps = (state: any) => {
    return state;
};

export default connect(mapToStateProps)(App);

