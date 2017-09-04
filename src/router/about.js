import React from 'react';
import {Link, BrowserRouter as Router, Route, hashHistory} from 'react-router-dom';
import App from '../app';
import AppComponent from '../component/app_component';
import history from 'history';

const HomeRoute = () => (
    <Router history={ history }>
        <div>
        <h2>React Router</h2>
        <Link to="/" className="btn btn-primary">Home</Link>
        <Link to="/app" className="btn btn-primary">App</Link>
        <Link to="/app-component" className="btn btn-primary">App Component</Link>

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

export default HomeRoute;
