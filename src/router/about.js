import React from 'react';
import {Link, BrowserRouter as Router, Route, hashHistory} from 'react-router-dom';
import App from '../app';
import AppComponent from '../component/app_component';

const HomeRoute = () => (
    <Router>
        <div>
            <h2>React Routeradasds</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/app">App</Link></li>
                <li><Link to="/app-component">App Component</Link></li>
            </ul>

        <Route exact path="/" component={Home} />
        <Route path="/app" component={App} />
        <Route path="/app-component" component={AppComponent} />
        </div>
    </Router>
)

const Home = () => (
    <div>
        <h2>Home</h2>   
    </div>
)
const About = () => (
    <div>
        <h2>About</h2>   
    </div>
)
const Topics = ({match}) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li><Link to={`${match.url}/1`}>Topic 1</Link></li>
            <li><Link to={`${match.url}/2`}>Topic 2</Link></li>
            <li><Link to={`${match.url}/3`}>Topic 3</Link></li>
        </ul>
        <Route path={`${match.url}/1`} component={Topic1} />
        <Route path={`${match.url}/2`} component={Topic2} />
        <Route path={`${match.url}/3`} component={Topic3} />
    </div>
)

const Topic1 = () => (
    <div>
        <h2>Topic1</h2>   
    </div>
)

const Topic2 = () => (
    <div>
        <h2>Topic2</h2>   
    </div>
)

const Topic3 = () => (
    <div>
        <h2>Topic3</h2>   
    </div>
)

export default HomeRoute;
