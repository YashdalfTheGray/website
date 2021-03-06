import ReactDOM from 'react-dom';
import React from 'react';
import App from './app';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
    <App />,
    document.getElementById('react-container')
);
