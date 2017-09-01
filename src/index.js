import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import App from './app';
import AppComponent from './component/app_component';
import HomeRoute from './router/about';

ReactDOM.render(<HomeRoute />, document.getElementById('home_route'));
