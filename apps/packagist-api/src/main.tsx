import * as React from 'react';
import * as ReactDOM from 'react-dom';
/* Polyfills */
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/promise';

import { App } from './app/app';

ReactDOM.render(<App />, document.querySelector('nxprojects-root'));
