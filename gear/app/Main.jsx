import './main.styl';
import React from 'react';
import ProductData from './ProductData.js';
import CartAPI from './utils/CartAPI.js';
import FluxCartApp from './components/App.jsx';


main();

function main() {

	ProductData.init();

	CartAPI.getProductData();

	var app = document.createElement('div');
	document.body.appendChild(app);

	React.render(<FluxCartApp />, app);
}
