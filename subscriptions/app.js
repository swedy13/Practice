import React from 'react';
import TweetsApp from './components/TweetsApp.jsx';


// Server-Side State
var initialState = JSON.parse(document.getElementById('initial-state').innerHTML)
	React.renderComponent(
		<TweetsApp tweets={initialState}/>,
		document.getElementById('react-app')
	);
