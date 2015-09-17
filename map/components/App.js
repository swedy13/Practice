var React			= require('react'),
	Search			= require('./Search'),
	Map				= require('./Map'),
	CurrentLocation = require('./CurrentLocation'),
	LocationList	= require('./LocationList');

var App = React.createClass({
	getInitialState(){
		var favorites = [];

		if(localStorage.favorites){
			favorites = JSON.parse(localStorage.favorites);
		}

		return {
			favorites: favorites,
			currentAddress: 'Prais, France',
			mapCoordinates: {
				lat: 48.856614,
				lng: 2.3522219
			}
		};
	},

	toggleFavorites(address){
		if(this.isAddressInFavorites(address)){
			this.removeFromFavorites(address);
		}
		else{
			this.addToFavorites(address)
		}
	},

	addToFavorites(address){
		var favorites = this.state.favorites;

		favorites.push({
			address: address,
			timestamp: Date.now()
		});

		this.setState({
			favorites: favorites
		});

		localStorage.favorites = JSON.stringify(favorites);
	},

	removeFromFavorites(address){
		var favorites	= this.state.favorites,
			index		= -1;

		for(var i = 0; i < favorites.length; i++){
			if(favorites[i].address == address){
				index = i;
				break;
			}
		}

		if(index !== -1){
			favorites.splice(index, 1);

			this.setState({
				favorites: favorites
			});

			localStorage.favorites = JSON.stringify(favorites);
		}
	},

	isAddressInFavorites(address){
		var favorites = this.state.favorites;

		for(var i = 0; i < favorites.length; i++){
			if(favorites[i].address = address){
				return true;
			}
		}

		return false;
	},

	searchForAddress(address){
		var self = this;

		GMaps.geocode({
			address: address,
			callback: function(results, status){
				if(status !== 'OK') return;

				var lating = results[0].geometry.location;

				self.setState({
					currentAddress: results[0].formatted_address,
					mapCoordinates: {
						lat: lating.lat(),
						lng: lating.lng()
					}
				});
			}
		});
	},

	render(){
		return(
			<div>
				<h1>Your Google Maps Locations</h1>

				<Search onSearch={this.searchForAddress}/>

				<Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng}/>

				<CurrentLocation address={this.state.currentAddress} favorites={this.isAddressInFavorites(this.state.CurrentAddress)} onFavoriteToggle={this.toggleFavorite}/>

				<LocationList location={this.state.favorites} activeLocationAddress={this.state.currentAddress} onClick={this.searchForAddress}/>
			</div>
		);
	}
});

module.exports = App.js
