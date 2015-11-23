Polls = new Mongo.Collection('polls');


if (Meteor.isServer) {
	Meteor.publish("polls", function() {
		return Polls.find();
	});
}


if (Meteor.isClient) {
	Meteor.subscribe("polls");
}
