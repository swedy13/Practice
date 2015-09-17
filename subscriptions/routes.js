import React from 'react';
import TweetsApp from './components/TweetsApp.jsx';
import Tweet from './models/Tweet.js';


module.exports = {

	index: function(req, res) {
		Tweet.getTweets(0, 0, function(tweets, pages) {

			var markup = React.renderComponentToString(
				TweetsApp({
					tweets: tweets
				})
			);

			res.render('home', {
				markup: markup,
				state: JSON.stringify(tweets)
			});
		});
	},

	page: function(req, res) {
		Tweet.getTweets(req.params.page, req.params.skip, function(tweets) {
			res.send(tweets);
		});
	}
}
