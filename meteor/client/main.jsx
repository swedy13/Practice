// Client
if(Meteor.isClient) {
	Meteor.startup(function() {
		var Twitter = Meteor.npmRequire('twitter');
		var twitter = new Twitter({
			consumer_key: wweGrj6S0khRXJS2BGcwfVeKL,
			consumer_secret: alZKqfOdyRq8hQGFYA7JIQc1NstH4zj5y0E2uvoQQUlPtNW0hr,
			access_token: 19272487-YOa3NL9dWNNk469oq3OkmQqxTz5ThbThm9PfQR31z,
			access_token_secret: ElsG88UOyKuELqIfVToS1kMYmvy58luMbRbxNpG98FoeJ
		});

		twitter.get('search/twitterPosts', {
			q: 'banana since: 2011-11-11',
			count: 100
		},
			function(err, data, response) {
				console.log(data);
			});
		
		router.run(function (Handler, state) {
			React.render(<Handler />, document.getElementById('react-root'));
		});
	});
}


// Layouts
Main = React.createClass({
	render() {
		return (
			<App/>
		)
	}
});
