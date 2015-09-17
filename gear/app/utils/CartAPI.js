import FluxCartActions from '../actions/FluxCartActions.js';


export default {

	getProductData() {
		var data = JSON.parse(localStorage.getItem('product'));
		FluxCartActions.receiveProduct(data);
	}
};
