// Set up your application entry point here...
// ./src/index.js
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import configureStore, { history } from './store/configureStore';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';
const store = configureStore();
render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./components/Root', () => {
        const NewRoot = require('./components/Root').default;
        render(
            <AppContainer>
                <NewRoot store={store} history={history} />
            </AppContainer>,
            document.getElementById('app')
        );
    });
}
