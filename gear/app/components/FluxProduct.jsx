import React from 'react';
import FluxCartActions from '../actions/FluxCartActions.js';


export default class FluxProduct extends React.Component {

	constructor() {
		super();
		this.addToCart = this.addToCart.bind(this);
	}

	addToCart() {
		var sku = this.props.selected.sku;
		var update = {
			name: this.props.product.name,
			type: this.props.selected.type,
			price: this.props.selected.price
		};

		FluxCartActions.addToCart(sku, update);
		FluxCartActions.updateCartVisible(true);
	}

	selectVariant(event) {
		FluxCartActions.selectProduct(event.target.value);
	}

	render() {
		var ats = (this.props.selected.sku in this.props.cartitems) ?
							this.props.selected.inventory - this.props.cartitems[this.props.selected.sku].quantity :
							this.props.selected.inventory;
		
		var Pic = '../assets/img/';
		
		console.log(Pic + this.props.product.image);

		return (
			<div className="flux-product">
				<img src={Pic + this.props.product.image}/>
				<div className="flux-product-detail">
					<h1 className="name">{this.props.name}</h1>
					<p className="description">{this.props.product.description}</p>
					<p className="price">Price: ${this.props.selected.price}</p>
					<select onChange={this.selectVariant}>
						{this.props.product.variants.map(function(variant, index) {
							return (
								<option key={index} value={index}>{variant.type}</option>
							);
						 })}
					</select>
					<button type="button" onClick={this.addToCart} disabled={ats > 0 ? '' : 'disabled'}>
						{ats > 0 ? 'Add to Cart' : 'Sold Out'}
					</button>
				</div>
			</div>
		);
	}
}
