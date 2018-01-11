// ./src/routes.js
import React  from 'react';
import {Route, IndexRoute} from 'react-router';

import About from './components/common/AboutPage';

import App from './components/App';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={About}></IndexRoute>
    </Route>
);