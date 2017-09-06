import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import HomeRoute from './router/about';

window.axios = axios.create({
     paramsSerializer: params => Qs.stringify(params, {arrayFormat: 'brackets'}),
});
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

render(<HomeRoute />, document.getElementById('home_route'));
