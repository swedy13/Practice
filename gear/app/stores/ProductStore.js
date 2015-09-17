import AppDispatcher from '../dispatcher/AppDispatcher.js';
import {EventEmitter} from 'events';
import FluxCartConstants from '../constants/FluxCartConstants.js';


var _product = {},
	_selected = null;


function loadProductData(data) {
	_product = data[0];
	_selected = data[0].variants[0];
}

function setSelected(index) {
	_selected = _product.variants[index];
}


class ProductStore extends EventEmitter {

	getProduct() {
		return _product;
	}

	getSelected() {
		return _selected;
	}

	emitChange() {
		this.emit('change');
	}

	addChangeListener(cb) {
		this.on('change', cb);
	}

	removeChangeListner(cb) {
		this.removeListener('change', cb);
	}
}


let productStoreInstance = new ProductStore();

AppDispatcher.register(function(payload) {
	var action = payload.action;

	switch(action.actionType) {
		case FluxCartConstants.RECEIVE_DATA:
			loadProductData(action.data);
			break;

		case FluxCartConstants.SELECT_PRODUCT:
			setSelected(action.data);
			break;

		default:
			return true;
	}

	productStoreInstance.emitChange();

	return true;
});


export default productStoreInstance;
