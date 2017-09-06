import React from 'react';
import {HashRouter, Switch, Route, hashHistory} from 'react-router-dom';
import App from '../app';
import AppComponent from '../component/app_component';
import history from './history';
import Dashboard from './dashboard';

const HomeRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/app" component={App} />
            <Route path="/app-component" component={AppComponent} />
            <Dashboard />
        </Switch>
    </HashRouter>
)

export default HomeRoute;
