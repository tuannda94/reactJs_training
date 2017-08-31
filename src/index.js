import React from 'react';
import {render} from 'react-dom';
import App from './app';
import AppComponent from './component/app_component';

render(<App/>, document.getElementById('app'));
render(<AppComponent/>, document.getElementById('app_component'));
