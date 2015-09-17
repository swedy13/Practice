var React			= require('react'),
	CartStore		= require('../stores/CartStore'),
	ProductStore	= require('../stores/ProductStore'),
	FluxProduct		= require('./FluxProduct.js'),
	FluxCart		= require('./FluxCart.js');


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


var FluxCartApp = React.createClass({

	getInitialState: function() {
		return getCartState();
	},

	componentDidMount: function() {
		ProductStore.addChangeListener(this._onChange);
		CartStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		ProductStore.removeChangeListener(this._onChange);
		CartStore.removeChangeListener(this._onChange);
	},

	render: function() {
		return (
			<div className="flux-cart-app">
			<FluxCart products={this.state.cartItems} count={this.state.cartCount} total={this.state.cartTotal} visible={this.state.cartVisible} />
			<FluxProduct product={this.state.product} cartitems={this.state.cartItems} selected={this.state.selectedProduct} />
			</div>
		);
	},

	_onChange: function() {
		this.setState(getCartState());
	}
});


module.exports = FluxCartApp;
