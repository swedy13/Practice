import './stylesheets/main.css';
import React from 'react';
import ProductData from './ProductData.js';
import CartAPI from './utils/CartAPI.js';
import FluxCartApp from './components/App.jsx';


main();

function main() {
    // Load Mock Product Data into localStorage
    ProductData.init();

    // Load Mock API Call
    CartAPI.getProductData();

    var app = document.createElement('div');
    document.body.appendChild(app);

    React.render(<FluxCartApp />, app);
}
