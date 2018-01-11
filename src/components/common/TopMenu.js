import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from './Link';
import {Link as RtLink} from 'react-toolbox/lib/link';
import { Switch, NavLink, Route } from 'react-router-dom';

const TopMenu = () => {
    return (
        <AppBar title="Admin panel" leftIcon="menu" rightIcon="work">
            <Navigation type="horizontal">
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/books'>Book</Link>
                <Link href="/cart" label="Cart" icon="inbox"/>
            </Navigation>
        </AppBar>
    );
};

export default TopMenu;