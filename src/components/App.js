// ./src/components/App.js
import React  from 'react';

import { Switch, NavLink, Route } from 'react-router-dom';

import TopMenu from './common/TopMenu';
import HomePage from './common/HomePage';
import AboutPage from './common/AboutPage';
import BookPage from './book/BookPage';


const App = (props) => {
    return (
        <div className="container">
            <TopMenu/>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/books" component={BookPage} />
            </Switch>
        </div>
    );
};

export default App;