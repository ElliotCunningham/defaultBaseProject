import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import routes from '../config/routes';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
	routes,
	document.getElementById('app')
);