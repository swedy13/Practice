import React from 'react';
import CartStore from '../Stores/CartStore.js';
import ProductStore from '../stores/ProductStore.js';
import FluxProduct from './FluxProduct.jsx';
import FluxCart from './FluxCart.jsx'


function getCartState() {
	
    return {
        product: ProductStore.getProduct(),
        selectedProduct: ProductStore.getSelected(),
        cartItems: CartStore.getCartItems(),
        cartCount: CartStore.getCartCount(),
        cartTotal: CartStore.getCartTotal(),
        cartVisible: CartStore.getCartVisible()
    };
}


export default class FluxCartApp extends React.Component {

    constructor(props) {
        super(props);

        this._onChange = this._onChange.bind(this);
        this.state = getCartState();
    }

	componentDidMount() {
		ProductStore.addChangeListener(this._onChange);
		CartStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		ProductStore.removeChangeListener(this._onChange);
		CartStore.removeChangeListener(this._onChange);
	}

	_onChange() {
		this.setState(getCartState());
	}

    render() {
        return (
            <div className="flux-cart-app">
                <FluxCart products={this.state.cartItems} count={this.state.cartCount} total={this.state.cartTotal} visible={this.state.cartVisible} />
                <FluxProduct product={this.state.product} cartitems={this.state.cartItems} selected={this.state.selectedProduct} />
            </div>
        );
    }
}
