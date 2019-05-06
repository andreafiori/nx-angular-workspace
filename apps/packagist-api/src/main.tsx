import * as React from 'react';
import * as ReactDOM from 'react-dom';
/* Polyfills */
import 'core-js/es6/map';
import 'core-js/es6/set';
// import 'raf/polyfill';
import 'core-js/es6/promise';
/* Styles */
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css';

import { App } from './app/app';

ReactDOM.render(<App />, document.querySelector('nxprojects-root'));
